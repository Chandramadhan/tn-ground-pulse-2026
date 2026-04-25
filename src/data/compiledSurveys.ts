export interface SurveyResult {
  label: string;
  id: string;
  percentage: number;
  color: string;
  glowClass: string;
}

export interface Survey {
  id: string;
  topic: string;
  source: string;
  date: string;
  results: SurveyResult[];
}

export interface BattlegroundSeat {
  name: string;
  region: string;
  leading: string;
  leadingId: string;
  status: 'Close Fight' | 'Leaning' | 'Strong Lead';
  margin: string;
}

export interface LiveIntelligence {
  id: string;
  timestamp: string;
  category: 'URGENT' | 'UPDATE' | 'SURVEY';
  content: string;
}

export const compiledSurveys: Survey[] = [
  {
    id: 'cm-preference-2026',
    topic: 'Chief Minister Preference (Ground Pulse)',
    source: 'Combined Field Intelligence',
    date: 'April 2026',
    results: [
      { label: 'Vijay (TVK)', id: 'tvk', percentage: 42, color: 'bg-[#8B0000]', glowClass: 'glow-maroon' },
      { label: 'M.K. Stalin (DMK)', id: 'dmk', percentage: 31, color: 'bg-[#ff0000]', glowClass: 'glow-red' },
      { label: 'Edappadi K. Palaniswami (AIADMK)', id: 'aiadmk', percentage: 17, color: 'bg-[#00923f]', glowClass: 'glow-green' },
      { label: 'Seeman (NTK)', id: 'ntk', percentage: 7, color: 'bg-[#008000]', glowClass: 'glow-green' },
      { label: 'Others', id: 'others', percentage: 3, color: 'bg-slate-500', glowClass: '' },
    ]
  },
  {
    id: 'policy-impact-2026',
    topic: 'Key Policy & Public Issue Impact',
    source: 'Public Sentiment Index',
    date: 'April 2026',
    results: [
      { label: 'Youth Employment & IT', id: 'impact', percentage: 38, color: 'bg-blue-500', glowClass: 'glow-blue' },
      { label: 'Welfare Schemes (Magalir Urimai Thogai)', id: 'impact', percentage: 25, color: 'bg-red-500', glowClass: 'glow-red' },
      { label: 'Language & State Rights', id: 'impact', percentage: 18, color: 'bg-orange-500', glowClass: 'glow-orange' },
      { label: 'Agriculture & Water Management', id: 'impact', percentage: 12, color: 'bg-green-500', glowClass: 'glow-green' },
      { label: 'Infrastructure & Connectivity', id: 'impact', percentage: 7, color: 'bg-slate-500', glowClass: '' },
    ]
  },
  {
    id: 'youth-digital-surge-2026',
    topic: 'Youth Momentum & Digital Sentiment Surge',
    source: 'Digital Intelligence Hub',
    date: 'April 2026',
    results: [
      { label: 'Vijay (TVK)', id: 'tvk', percentage: 51, color: 'bg-[#8B0000]', glowClass: 'glow-maroon' },
      { label: 'NTK (Seeman)', id: 'ntk', percentage: 24, color: 'bg-[#008000]', glowClass: 'glow-green' },
      { label: 'DMK Alliance', id: 'dmk', percentage: 12, color: 'bg-[#ff0000]', glowClass: 'glow-red' },
      { label: 'BJP', id: 'bjp', percentage: 8, color: 'bg-[#FF9933]', glowClass: 'glow-orange' },
      { label: 'AIADMK', id: 'aiadmk', percentage: 5, color: 'bg-[#00923f]', glowClass: 'glow-green' },
    ]
  },
  {
    id: 'historical-turnout-comparison',
    topic: 'Voter Turnout & Math (Historical vs 2026)',
    source: 'Electoral Analytics Dashboard',
    date: 'April 2026',
    results: [
      { label: '2026 (April 23) - [4.84 Cr / 5.75 Cr Voters]', id: 'surge', percentage: 84.2, color: 'bg-red-500', glowClass: 'glow-red' },
      { label: '2021 Assembly - [4.57 Cr / 6.28 Cr Voters]', id: 'hist', percentage: 72.8, color: 'bg-slate-500', glowClass: '' },
      { label: '2016 Assembly - [4.35 Cr / 5.82 Cr Voters]', id: 'hist', percentage: 74.8, color: 'bg-slate-500', glowClass: '' },
      { label: '2011 Assembly - [3.67 Cr / 4.71 Cr Voters]', id: 'hist', percentage: 78.0, color: 'bg-slate-500', glowClass: '' },
    ]
  },
  {
    id: 'unbiased-ground-pulse-2026',
    topic: 'Consolidated Ground Pulse (Unbiased Sync)',
    source: 'Aggregated Intelligence: Field + Digital + Media',
    date: 'April 2026',
    results: [
      { label: 'Vijay (TVK)', id: 'tvk', percentage: 36.5, color: 'bg-[#8B0000]', glowClass: 'glow-maroon' },
      { label: 'DMK Alliance', id: 'dmk', percentage: 35.8, color: 'bg-[#ff0000]', glowClass: 'glow-red' },
      { label: 'AIADMK Alliance', id: 'aiadmk', percentage: 14.2, color: 'bg-[#00923f]', glowClass: 'glow-green' },
      { label: 'NTK (Seeman)', id: 'ntk', percentage: 9.5, color: 'bg-[#008000]', glowClass: 'glow-green' },
      { label: 'Others / BJP', id: 'others', percentage: 4.0, color: 'bg-slate-500', glowClass: '' },
    ]
  }
];

export const demographicsData = [
  {
    category: 'Age: 18-29 (Gen Z / Millennials)',
    splits: [
      { label: 'TVK', percentage: 58, color: 'bg-[#8B0000]' },
      { label: 'NTK', percentage: 22, color: 'bg-[#008000]' },
      { label: 'DMK', percentage: 12, color: 'bg-[#ff0000]' },
      { label: 'Others', percentage: 8, color: 'bg-slate-600' }
    ]
  },
  {
    category: 'Age: 30-50 (Working Class)',
    splits: [
      { label: 'DMK', percentage: 38, color: 'bg-[#ff0000]' },
      { label: 'TVK', percentage: 32, color: 'bg-[#8B0000]' },
      { label: 'AIADMK', percentage: 20, color: 'bg-[#00923f]' },
      { label: 'Others', percentage: 10, color: 'bg-slate-600' }
    ]
  },
  {
    category: 'Age: 50+ (Seniors)',
    splits: [
      { label: 'DMK', percentage: 42, color: 'bg-[#ff0000]' },
      { label: 'AIADMK', percentage: 35, color: 'bg-[#00923f]' },
      { label: 'Others', percentage: 15, color: 'bg-slate-600' },
      { label: 'TVK', percentage: 8, color: 'bg-[#8B0000]' }
    ]
  }
];

export const battlegroundSeats: BattlegroundSeat[] = [
  { name: 'Kolathur', region: 'Chennai', leading: 'M.K. Stalin', leadingId: 'dmk', status: 'Strong Lead', margin: 'High' },
  { name: 'Trichy West', region: 'Central TN', leading: 'Thalapathy Vijay', leadingId: 'tvk', status: 'Strong Lead', margin: 'High' },
  { name: 'Edappadi', region: 'Salem', leading: 'E.K. Palaniswami', leadingId: 'aiadmk', status: 'Strong Lead', margin: 'High' },
  { name: 'Perambur', region: 'North Chennai', leading: 'Thalapathy Vijay', leadingId: 'tvk', status: 'Strong Lead', margin: 'High' },
  { name: 'Karaikudi', region: 'South TN', leading: 'Seeman (NTK)', leadingId: 'ntk', status: 'Leaning', margin: 'Moderate' }
];

export const liveIntelligenceFeed: LiveIntelligence[] = [
  { id: '1', timestamp: '08:42 AM', category: 'URGENT', content: 'Voter turnout confirmed at record-breaking 84.2% statewide following April 23 polls.' },
  { id: '2', timestamp: '07:15 AM', category: 'UPDATE', content: 'Heavy polling reported in urban pockets, traditionally a challenge for major alliances.' },
  { id: '3', timestamp: '06:30 AM', category: 'SURVEY', content: 'Digital sentiment analysis shows 15% increase in TVK hashtag engagement in last 24h.' },
  { id: '4', timestamp: 'Yesterday', category: 'UPDATE', content: 'Historical comparison shows 2026 has surpassed the high mark of 2011 (78.0%).' }
];
