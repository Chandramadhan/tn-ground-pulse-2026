import type { FC } from 'react';
import { demographicsData } from '../data/compiledSurveys';
import { Users2 } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Demographics: FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-2">
        <Users2 className="w-6 h-6 text-blue-500" />
        <h2 className="text-2xl font-black text-white italic tracking-tighter uppercase">Voter Demographics</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {demographicsData.map((demo, idx) => (
          <Tilt key={idx} tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1.02}>
            <div className="dashboard-card p-6 h-full">
              <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-800 pb-3">
                {demo.category}
              </h3>
              <div className="space-y-4">
                {demo.splits.map((split, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold">
                      <span className="text-slate-300">{split.label}</span>
                      <span className="text-white">{split.percentage}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${split.color}`}
                        style={{ width: `${split.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Demographics;
