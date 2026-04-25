import type { FC } from 'react';
import type { Survey } from '../data/compiledSurveys';
import { ExternalLink, Info } from 'lucide-react';
import PartyIcon from './PartyIcon';
import Tilt from 'react-parallax-tilt';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SurveySectionProps {
  survey: Survey;
}

const SurveySection: FC<SurveySectionProps> = ({ survey }) => {
  return (
    <Tilt 
      tiltMaxAngleX={5} 
      tiltMaxAngleY={5} 
      perspective={1000} 
      scale={1.02} 
      transitionSpeed={1000} 
      className="h-full"
    >
      <div className="dashboard-card group h-full">
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">{survey.topic}</h2>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  {survey.source}
                </span>
                <span>•</span>
                <span className="text-slate-500 uppercase tracking-tighter">{survey.date}</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800/50 rounded-md border border-slate-700/50 text-[10px] uppercase font-bold tracking-widest text-slate-400">
              <Info className="w-3 h-3 text-red-500" />
              Verified
            </div>
          </div>

          <div className="space-y-6">
            {survey.results.map((result, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={cn("p-1.5 rounded-lg bg-slate-800 border border-slate-700", result.glowClass)}>
                      <PartyIcon partyId={result.id} className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-bold text-slate-200">{result.label}</span>
                    {result.id === 'tvk' && result.percentage > 30 && (
                      <span className="flex items-center gap-1 text-[8px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded-full border border-red-500/30 animate-pulse font-black uppercase">
                        High Momentum
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-black text-white tabular-nums">{result.percentage}%</span>
                </div>
                <div className="relative h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={cn("absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(0,0,0,0.5)]", result.color, result.glowClass)}
                    style={{ width: `${result.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-6 py-3 bg-slate-950/40 border-t border-slate-800/50 flex items-center justify-between">
          <span className="text-[10px] text-slate-500 font-medium italic">Aggregated via Independent Analysis</span>
          <div className="flex gap-1">
            {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-slate-700" />)}
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default SurveySection;
