import type { FC } from 'react';
import { battlegroundSeats } from '../data/compiledSurveys';
import { Target, MapPin } from 'lucide-react';
import PartyIcon from './PartyIcon';
import Tilt from 'react-parallax-tilt';

const BattlegroundSeats: FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-2">
        <Target className="w-6 h-6 text-red-500" />
        <h2 className="text-2xl font-black text-white italic tracking-tighter uppercase">Key Battleground Seats</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {battlegroundSeats.map((seat, idx) => (
          <Tilt key={idx} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.05}>
            <div className="dashboard-card p-5 relative group h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-slate-800 rounded-lg border border-slate-700">
                  <PartyIcon partyId={seat.leadingId} className="w-5 h-5 text-white" />
                </div>
                <div className={`text-[8px] font-black uppercase px-2 py-1 rounded border ${
                  seat.status === 'Strong Lead' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 
                  seat.status === 'Leaning' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 
                  'bg-orange-500/10 text-orange-400 border-orange-500/20 animate-pulse'
                }`}>
                  {seat.status}
                </div>
              </div>
              
              <h3 className="text-lg font-black text-white tracking-tight mb-1">{seat.name}</h3>
              <div className="flex items-center gap-1 text-[10px] text-slate-500 font-bold uppercase mb-4">
                <MapPin className="w-3 h-3" />
                {seat.region} Region
              </div>
              
              <div className="pt-3 border-t border-slate-800">
                <p className="text-[10px] text-slate-500 font-black uppercase mb-1">Leading Candidate</p>
                <p className="text-sm font-bold text-slate-200">{seat.leading}</p>
              </div>
              
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                <Target className="w-12 h-12 text-white" />
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default BattlegroundSeats;
