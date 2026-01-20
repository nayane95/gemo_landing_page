import { TeamMember, ContactInfo } from '@/types';

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Julian Vance',
    role: 'Chief Gemologist',
    image: '/images/team-1.jpg',
  },
  {
    id: '2',
    name: 'Aline Sherif',
    role: 'Head of Design',
    image: '/images/team-2.jpg',
  },
  {
    id: '3',
    name: 'Marcus Throne',
    role: 'Master Gem Cutter',
    image: '/images/team-3.jpg',
  },
];

export const contactInfo: ContactInfo[] = [
  {
    id: '1',
    title: 'VIP Phone Lines',
    details: '+1 (000) 000 000',
    subDetails: 'Available 24/7 global clients',
    type: 'phone',
  },
  {
    id: '2',
    title: 'WhatsApp Direct',
    details: 'Chat with a senior specialist',
    subDetails: 'Instant response time < 5min',
    type: 'whatsapp',
  },
  {
    id: '3',
    title: 'Private Email',
    details: 'company@gjhdks.gmail.com',
    subDetails: '',
    type: 'email',
  },
];
