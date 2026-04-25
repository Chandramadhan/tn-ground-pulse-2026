import type { FC } from 'react';
import { Search, BarChart3 } from 'lucide-react';

const Header: FC = () => {
  return (
    <header className="bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-lg opacity-20"></div>
              {/* Surveyor / Analyst Identity Icon */}
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-700 relative z-10 shadow-lg group">
                <Search className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black text-white tracking-tighter uppercase italic">TN Ground Pulse <span className="text-blue-500">2026</span></h1>
                <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
              </div>
              <div className="flex items-center gap-3 text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
                <span className="flex items-center gap-1 text-slate-400">
                  <BarChart3 className="w-3 h-3" />
                  Independent Surveyor Network
                </span>
                <span>•</span>
                <span>Ground Intelligence Gathering</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
            <div className="px-4 py-2 bg-slate-900 rounded-lg border border-slate-800 flex flex-col items-end border-l-4 border-l-blue-500">
              <span className="text-[10px] text-slate-500 font-bold uppercase">Role</span>
              <div className="flex items-center gap-2 text-xs text-white font-black italic">
                PUBLIC EYE ANALYST
              </div>
            </div>
            <div className="px-4 py-2 bg-slate-900 rounded-lg border border-slate-800 flex flex-col items-end border-l-4 border-l-slate-700">
              <span className="text-[10px] text-slate-500 font-bold uppercase">Mission</span>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-black italic">
                UNBIASED REPORTING
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
