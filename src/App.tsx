import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from './config/site';
import { Zap, Target, Brain, Trash2, Plus, ArrowRight, BarChart3, ShieldAlert } from 'lucide-react';

const App = () => {
  const [tasks, setTasks] = useState<{ id: number, text: string, completed: boolean }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [motivation, setMotivation] = useState(siteConfig.planner.motivation[0]);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue('');
    // Change motivation
    setMotivation(siteConfig.planner.motivation[Math.floor(Math.random() * siteConfig.planner.motivation.length)]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-bg text-fg font-sans selection:bg-accent selection:text-bg grain overflow-x-hidden">
      {/* Navigation */}
      <nav className="py-6 px-8 md:px-16 flex justify-between items-center border-b border-white/5 sticky top-0 z-40 bg-bg/80 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
             <Zap className="text-bg w-6 h-6 fill-current" />
          </div>
          <span className="text-2xl font-black tracking-tighter font-display">{siteConfig.name}</span>
        </div>
        <div className="hidden md:flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
           <a href="#system" className="hover:text-accent transition-colors">System</a>
           <a href="#planner" className="hover:text-accent transition-colors">Protokół</a>
           <a href="#stats" className="hover:text-accent transition-colors">Dane</a>
        </div>
        <button className="bg-white text-black px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-accent transition-colors">
          ZALOGUJ
        </button>
      </nav>

      <main>
        {/* Hero */}
        <section className="pt-32 pb-48 px-8 md:px-16 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-accent text-[11px] font-black uppercase tracking-[0.5em] mb-12 border-l-2 border-accent pl-4">
                {siteConfig.hero.badge}
              </span>
              <h1 className="text-7xl md:text-[140px] font-black leading-[0.85] mb-12 tracking-tighter whitespace-pre-line">
                {siteConfig.hero.title}
              </h1>
              <p className="text-xl text-white/40 leading-relaxed mb-16 max-w-xl">
                {siteConfig.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                 <button className="brutalist-button">{siteConfig.hero.cta.text}</button>
                 <button className="px-8 py-4 border border-white/20 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-white/5 transition-all">
                    {siteConfig.hero.secondaryCta.text}
                 </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:block"
            >
               <div className="absolute inset-0 bg-accent/20 blur-[180px] rounded-full animate-pulse"></div>
               <div className="relative bg-dark-surface border-4 border-white p-12 rotate-3 shadow-[20px_20px_0px_0px_rgba(0,255,65,0.2)]">
                  <div className="flex justify-between items-start mb-24">
                     <div className="w-16 h-1 bg-accent"></div>
                     <BarChart3 className="text-white/20 w-8 h-8" />
                  </div>
                  <h3 className="text-5xl font-black mb-8 italic">ENGINEERED FOR SUCCESS.</h3>
                  <div className="space-y-4">
                     <div className="h-2 bg-white/10 w-full rounded-full">
                        <div className="h-full bg-accent w-[85%]"></div>
                     </div>
                     <div className="flex justify-between text-[10px] font-black uppercase opacity-40">
                        <span>Progression</span>
                        <span>85%</span>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* System Features */}
        <section id="system" className="bg-white text-black py-48 px-8 md:px-16">
           <div className="max-w-7xl mx-auto">
              <h2 className="text-5xl md:text-[100px] font-black leading-none mb-32 tracking-tighter uppercase italic">
                {siteConfig.system.title}
              </h2>
              <div className="grid md:grid-cols-3 gap-2 bg-black border-2 border-black">
                {siteConfig.system.features.map((f) => (
                  <div key={f.id} className="bg-white p-16 hover:bg-accent transition-colors group cursor-default">
                    <span className="text-6xl font-black opacity-10 group-hover:opacity-100 transition-opacity mb-8 block">{f.id}</span>
                    <h4 className="text-3xl font-black mb-8 uppercase leading-tight">{f.title}</h4>
                    <p className="text-sm font-medium leading-relaxed opacity-60 group-hover:opacity-100">{f.desc}</p>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* Interactive Planner */}
        <section id="planner" className="py-48 px-8 md:px-16 bg-bg relative">
           <div className="max-w-4xl mx-auto">
              <div className="text-center mb-24">
                <h2 className="text-6xl font-black mb-8">{siteConfig.planner.title}</h2>
                <div className="bg-white/5 inline-block px-8 py-3 rounded-full">
                   <p className="text-accent text-sm font-black uppercase tracking-widest animate-pulse">
                      &gt; {motivation}
                   </p>
                </div>
              </div>

              <div className="bg-dark-surface border-2 border-white/10 p-8 md:p-16">
                 <form onSubmit={addTask} className="flex gap-4 mb-16">
                    <input 
                      type="text" 
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={siteConfig.planner.placeholder}
                      className="flex-1 bg-transparent border-b-2 border-white/20 px-4 py-4 text-xl focus:border-accent outline-none transition-colors"
                    />
                    <button type="submit" className="bg-accent text-bg p-4 hover:scale-110 transition-transform">
                       <Plus />
                    </button>
                 </form>

                 <div className="space-y-6">
                    <AnimatePresence>
                      {tasks.map((task) => (
                        <motion.div 
                          key={task.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          className="flex items-center justify-between p-6 bg-white/5 border border-white/5 group"
                        >
                          <div className="flex items-center gap-6">
                            <button 
                              onClick={() => toggleTask(task.id)}
                              className={`w-8 h-8 border-2 transition-colors flex items-center justify-center ${task.completed ? 'bg-accent border-accent' : 'border-white/20'}`}
                            >
                               {task.completed && <ArrowRight className="text-bg w-4 h-4" />}
                            </button>
                            <span className={`text-xl font-bold ${task.completed ? 'line-through opacity-30' : ''}`}>
                               {task.text}
                            </span>
                          </div>
                          <button onClick={() => removeTask(task.id)} className="opacity-0 group-hover:opacity-40 hover:opacity-100 hover:text-red-500 transition-all">
                             <Trash2 />
                          </button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    {tasks.length === 0 && (
                      <div className="text-center py-12 opacity-20 italic">
                         Lista jest pusta. System czeka na Twój pierwszy krok.
                      </div>
                    )}
                 </div>
              </div>
           </div>
        </section>

        {/* Stats */}
        <section id="stats" className="py-48 px-8 md:px-16 border-t border-white/5">
           <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-24">
                 {siteConfig.stats.map((stat, i) => (
                   <div key={i} className="text-center">
                      <div className="text-8xl md:text-[140px] font-black text-accent leading-none mb-8">
                         {stat.value}
                      </div>
                      <p className="text-[11px] font-black uppercase tracking-[0.5em] opacity-40 max-w-[200px] mx-auto">
                         {stat.label}
                      </p>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      </main>

      <footer className="py-24 px-8 md:px-16 border-t border-white/5 bg-black">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-4">
               <Zap className="text-accent" />
               <span className="text-sm font-black tracking-widest">{siteConfig.name}</span>
            </div>
            <div className="flex gap-12">
              {siteConfig.footer.links.map(l => (
                <a key={l.text} href={l.href} className="text-[10px] font-black uppercase tracking-widest opacity-30 hover:opacity-100 transition-opacity">
                   {l.text}
                </a>
              ))}
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-20">
               {siteConfig.footer.copyright}
            </p>
         </div>
      </footer>
    </div>
  );
};

export default App;
