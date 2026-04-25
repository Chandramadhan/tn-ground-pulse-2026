import type { FC } from 'react';
import { liveIntelligenceFeed } from '../data/compiledSurveys';
import { Terminal, Clock } from 'lucide-react';

const LiveFeed: FC = () => {
  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-md">
      <div className="px-6 py-4 bg-slate-800/50 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Terminal className="w-5 h-5 text-green-500" />
          <h2 className="text-sm font-black text-white uppercase tracking-widest">Ground Intelligence Feed</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Live Stream</span>
        </div>
      </div>
      
      <div className="p-4 h-64 overflow-y-auto font-mono scrollbar-hide">
        <div className="space-y-4">
          {liveIntelligenceFeed.map((item) => (
            <div key={item.id} className="flex gap-4 items-start border-b border-slate-800/50 pb-4 last:border-0">
              <div className="flex flex-col items-center">
                <Clock className="w-3 h-3 text-slate-600 mb-1" />
                <span className="text-[10px] text-slate-500 whitespace-nowrap">{item.timestamp}</span>
              </div>
              <div className="space-y-1">
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                  item.category === 'URGENT' ? 'bg-red-500/20 text-red-400' :
                  item.category === 'SURVEY' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-green-500/20 text-green-400'
                }`}>
                  [{item.category}]
                </span>
                <p className="text-xs text-slate-300 leading-relaxed tracking-tight">
                  <span className="text-green-500 mr-2 opacity-50">&gt;</span>
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveFeed;
