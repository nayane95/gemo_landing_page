export default function TrustStrip() {
  return (
    <div className="border-y border-[rgba(255,255,255,0.1)] bg-[#040e1a]">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          
          {/* Left: Certificate Text */}
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full border border-(--gold) flex items-center justify-center">
              <div className="w-3 h-3 bg-(--gold) rounded-full animate-pulse" />
            </div>
            <span className="text-sm font-medium tracking-wide text-(--muted)">
              CERTIFIED AUTHENTICITY
            </span>
          </div>

          {/* Right: Logos */}
          <div className="flex items-center gap-12 opacity-80 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
            <span className="text-xl font-serif text-white tracking-widest">GIA</span>
            <span className="text-xl font-serif text-white tracking-widest">GRS</span>
            <span className="text-xl font-serif text-white tracking-widest">IGI</span>
          </div>
        </div>
      </div>
    </div>
  );
}
