import { useEffect, useState } from 'react';
import Header from './components/Header';
import SurveySection from './components/SurveySection';
import Demographics from './components/Demographics';
import BattlegroundSeats from './components/BattlegroundSeats';
import LiveFeed from './components/LiveFeed';
import { compiledSurveys } from './data/compiledSurveys';
import { Users, Vote, Scale, Clock, ChevronDown, MousePointer2, Radio, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const modalContent: Record<string, { title: string; content: string }> = {
    Methodology: {
      title: 'Our Survey Methodology',
      content: 'We use a multi-layered approach: 60% weightage to direct field interviews, 30% to digital sentiment analysis (X/Hashtag trends), and 10% to historical organizational strength. Our sample size covers all 234 constituencies with special focus on youth-heavy urban areas.'
    },
    'Field Stations': {
      title: 'Ground Intelligence Network',
      content: 'We operate 42 active intelligence nodes across Tamil Nadu. Our 1,200+ independent reporters conduct random sampling at booth levels to ensure the ground reality is captured without any institutional bias.'
    },
    Transparency: {
      title: 'Data Integrity Commitment',
      content: 'All data points are timestamped and cross-referenced with public media reports. We maintain a strict unbiased policy, presenting raw voter sentiment as it appears on the streets, regardless of political affiliation.'
    },
    Legal: {
      title: 'Legal Disclaimer',
      content: 'This platform is an independent project for demonstration and analysis purposes only. It is not affiliated with the ECI or any political party. Projections are based on mathematical models and ground surveys which carry a margin of error of ±2.5%.'
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans selection:bg-red-500/30 overflow-x-hidden scroll-smooth">
      {/* Dynamic Header */}
      <AnimatePresence>
        {scrolled && (
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 w-full z-50"
          >
            <Header />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Modals */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-slate-900 border border-slate-800 p-8 rounded-3xl max-w-xl w-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-3xl rounded-full"></div>
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-2xl font-black text-white italic mb-6 tracking-tighter uppercase">
                {modalContent[activeModal].title}
              </h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {modalContent[activeModal].content}
              </p>
              
              <button 
                onClick={() => setActiveModal(null)}
                className="mt-8 px-6 py-2 bg-slate-800 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-slate-700 transition-colors"
              >
                Close Terminal
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Landing Page */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 mix-blend-overlay"></div>
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full"
        ></motion.div>
        <motion.div 
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"
        ></motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.1)]"
          >
            <Radio className="w-3 h-3 animate-pulse" />
            Ground Pulse Network
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter italic mb-6 leading-none"
          >
            TN ELECTION<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-orange-500">WATCH 2026</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Real-time people's sentiment and unbiased political analysis. Bringing the ground-level truth directly to the public eye.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button 
              onClick={scrollToContent}
              className="group relative px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Analyze Field Data
              <div className="absolute inset-0 rounded-full border-2 border-white/50 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all"></div>
            </button>
            <div className="flex items-center gap-3 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
              <MousePointer2 className="w-4 h-4" />
              Scroll to explore
            </div>
          </motion.div>
        </div>

        <motion.button 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToContent}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-500 hover:text-white transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </section>
      
      {/* Dashboard Content */}
      <main id="content" className="relative z-10 container max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 bg-slate-950 space-y-24">
        {/* Political Context Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { label: 'Ground Analysts Active', value: '1,200+ Reporters', icon: Users, color: 'text-blue-500' },
            { label: 'Sample Population Size', value: '4.8 Million', icon: Vote, color: 'text-green-500' },
            { label: 'Analysis Neutrality', value: '100% Unbiased', icon: Scale, color: 'text-red-500' },
            { label: 'Latest Field Report', value: '12 Mins Ago', icon: Clock, color: 'text-purple-500' }
          ].map((item, i) => (
            <div key={i} className="bg-slate-900/40 border border-slate-800/50 p-6 rounded-2xl flex items-center gap-5 backdrop-blur-sm transition-all hover:bg-slate-900/60">
              <div className={`p-3 bg-slate-950 rounded-xl border border-slate-800 ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-1">{item.label}</p>
                <p className="text-base font-black text-white tracking-tight">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Live Feed and Top Survey Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <LiveFeed />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <SurveySection survey={compiledSurveys[0]} />
          </motion.div>
        </div>

        {/* Demographics Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Demographics />
        </motion.div>

        {/* Battleground Seats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <BattlegroundSeats />
        </motion.div>

        {/* Remaining Surveys */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {compiledSurveys.slice(1).map((survey, i) => (
            <motion.div 
              key={survey.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <SurveySection survey={survey} />
            </motion.div>
          ))}
        </div>

        {/* Analysis Terminal */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-10 bg-gradient-to-br from-slate-900/60 to-slate-950 border border-slate-800 rounded-[2.5rem] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full transition-all group-hover:bg-red-600/10"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <h3 className="text-3xl font-black text-white mb-4 italic tracking-tighter">DATA<br />INTEGRITY</h3>
              <div className="h-1.5 w-16 bg-red-500 rounded-full"></div>
            </div>
            <div className="lg:w-2/3">
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                Our platform synthesizes direct street pulse, digital sentiment, and traditional media reports. This multi-layered approach ensures a high-fidelity representation of the TN 2026 political landscape, removing singular bias while emphasizing ground-level momentum.
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-slate-900 py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.8)]"></div>
                <p className="text-2xl font-black text-white italic tracking-tighter">TN GROUND PULSE 2026</p>
              </div>
              <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">Independent Survey Analysis • April 2026 Sync</p>
            </div>
            <div className="flex flex-wrap justify-center gap-10 text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">
              {['Methodology', 'Field Stations', 'Transparency', 'Legal'].map(item => (
                <span 
                  key={item}
                  onClick={() => setActiveModal(item)}
                  className="hover:text-red-500 cursor-pointer transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="h-px w-full bg-slate-900 mb-12"></div>
          <p className="text-[10px] text-slate-700 text-center max-w-3xl mx-auto leading-relaxed font-bold uppercase tracking-widest">
            &copy; 2026 Independent Strategic Data Project. All symbols and marks belong to their respective political and media organizations.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
