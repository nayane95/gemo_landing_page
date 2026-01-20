'use client';

import { useState, useMemo } from 'react';
import { gemstones } from '@/data/gemstones';
import GemCard from '@/components/GemCard';
import SectionHeading from '@/components/SectionHeading';
import { ChevronDown } from 'lucide-react';

const gemTypes = ['All', 'Ruby', 'Emerald', 'Sapphire', 'Rare Find'];
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low'];

export default function CollectionsPage() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Featured');

  const filteredGems = useMemo(() => {
    let result = [...gemstones];

    // Filter
    if (selectedType !== 'All') {
      result = result.filter(gem => gem.type === selectedType);
    }

    // Sort
    if (selectedSort === 'Price: Low to High') {
      result.sort((a, b) => a.priceFrom - b.priceFrom);
    } else if (selectedSort === 'Price: High to Low') {
      result.sort((a, b) => b.priceFrom - a.priceFrom);
    } else {
       // Default featured
       result.sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));
    }

    return result;
  }, [selectedType, selectedSort]);

  return (
    <div className="bg-[var(--bg)] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeading title="The Collection" subtitle="Curated Inventory" className="mb-12" />

        {/* Filters & Sort */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          
          {/* Filter Chips */}
          <div className="flex flex-wrap gap-4">
            {gemTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-widest border rounded-full transition-all duration-300 ${
                  selectedType === type
                    ? 'bg-[var(--gold)] text-black border-[var(--gold)]'
                    : 'bg-transparent text-[var(--muted)] border-[rgba(255,255,255,0.1)] hover:border-[var(--gold)] hover:text-[var(--gold)]'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="relative group">
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="appearance-none bg-[var(--panel)] border border-[rgba(255,255,255,0.1)] text-white text-sm px-6 py-3 rounded min-w-[200px] focus:outline-none cursor-pointer"
            >
              {sortOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)] pointer-events-none" />
          </div>
        </div>

        {/* Grid */}
        {filteredGems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGems.map((gem) => (
              <GemCard key={gem.id} gem={gem} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[var(--muted)]">
            No gemstones found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}
