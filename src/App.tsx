/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bot, Sparkles, Workflow, ExternalLink, Zap, ChevronRight, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-canvas font-sans selection:bg-brand-pink selection:text-white">
      {/* Top Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 md:py-6 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center">
            <Bot size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight">Gento</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <a href="#agents" className="text-[14px] font-medium text-ink/70 hover:text-ink transition-colors">Agents</a>
          <a href="#platform" className="text-[14px] font-medium text-ink/70 hover:text-ink transition-colors">Platform</a>
          <a href="#about" className="text-[14px] font-medium text-ink/70 hover:text-ink transition-colors">Company</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-5 py-2.5 bg-primary text-white text-[14px] font-semibold rounded-[12px] hover:bg-opacity-90 transition-opacity">
            Book a Demo
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Band */}
        <section className="py-12 md:py-[96px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center mb-12">
            <div className="md:col-span-7 flex flex-col items-start gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-card rounded-pill border border-hairline"
              >
                <Sparkles size={14} className="text-brand-pink" />
                <span className="text-[13px] font-medium tracking-wide uppercase text-ink/60">Introducing Gento 1.0</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-display-xl text-ink leading-[0.9] max-w-[15ch]"
              >
                The AI agent that does the work for you.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[18px] text-ink/80 max-w-lg leading-relaxed"
              >
                Meet Gento, the world's most capable general-purpose AI agent. It uses a computer just like you do—navigating interfaces, researching the web, and executing complex workflows without supervision.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-4 pt-4"
              >
                <button className="px-6 py-3 bg-primary text-white text-[16px] font-semibold rounded-[12px] hover:bg-opacity-90 transition-opacity flex items-center gap-2">
                  Book a Demo <ChevronRight size={16} />
                </button>
                <button className="px-6 py-3 bg-canvas border border-hairline text-ink text-[16px] font-semibold rounded-[12px] hover:bg-surface-card transition-colors">
                  See how it works
                </button>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-5 relative"
            >
              {/* Playful Hero Artifact Card */}
              <div className="bg-surface-soft rounded-xl p-8 aspect-square relative border border-hairline overflow-hidden flex flex-col justify-end">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-full h-full flex justify-center items-center">
                  {/* Ambient Background Glow */}
                  <div className="absolute w-40 h-40 bg-brand-peach opacity-30 blur-3xl -top-10 -right-10 rounded-full"></div>
                  <div className="absolute w-60 h-60 bg-brand-lavender opacity-20 blur-3xl -bottom-10 -left-10 rounded-full"></div>
                  
                  {/* Minimalist claymation scene */}
                  
                  {/* Base/Pedestal */}
                  <motion.div
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute mt-32 w-56 h-20 bg-brand-lavender rounded-[40px] shadow-[inset_-5px_-10px_20px_rgba(0,0,0,0.15),_0_15px_25px_rgba(0,0,0,0.05)] border-t border-white/50 z-0 rotate-[-4deg]"
                  />

                  {/* Main Character Shape */}
                  <motion.div
                    animate={{ y: [-8, 8, -8], rotate: [4, 0, 4] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -mt-8 ml-8 w-32 h-40 bg-brand-ochre rounded-[50px] shadow-[inset_-8px_-8px_25px_rgba(0,0,0,0.15),_10px_10px_20px_rgba(0,0,0,0.05)] border-t border-l border-white/60 z-10"
                  >
                    <div className="absolute top-10 left-8 w-3 h-3 bg-primary rounded-full opacity-90" />
                    <div className="absolute top-10 right-10 w-3 h-3 bg-primary rounded-full opacity-90" />
                  </motion.div>

                  {/* Pink Orb */}
                  <motion.div
                    animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -ml-28 -mt-16 w-24 h-24 bg-brand-pink rounded-full shadow-[inset_-8px_-8px_20px_rgba(0,0,0,0.2),_8px_8px_20px_rgba(0,0,0,0.05)] border-t border-l border-white/70 z-20"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section id="agents" className="py-12 md:py-[96px] px-6 md:px-12 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-3 mb-8">
             <h2 className="text-display-md text-ink">Operates any software, just like a human.</h2>
             <p className="text-title-md text-ink/70 mt-4 max-w-3xl">No brittle APIs or predefined scripts. Give Gento a high-level goal, and it will autonomously browse the web, operate desktop applications, and use spreadsheet software to get it done.</p>
          </div>

          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-brand-pink rounded-xl p-8 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-1/4 -translate-y-1/4">
              <Zap size={120} className="text-white" />
            </div>
            <div className="relative z-10 mb-24">
              <h3 className="text-[24px] font-medium leading-tight tracking-tight text-white mb-2">Deep Autonomous Research</h3>
              <p className="text-[14px] text-white/80 font-medium">Gento doesn't just summarize search results. It navigates sites, bypasses popups, synthesizes data from hundreds of sources, and compiles everything into actionable reports.</p>
            </div>
            
            <div className="relative z-10">
              <button className="px-4 py-2.5 bg-white text-ink text-[14px] font-semibold rounded-[12px] group-hover:bg-opacity-90 transition-opacity">
                See research capabilities
              </button>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-brand-teal rounded-xl p-8 flex flex-col justify-between group overflow-hidden relative"
          >
             <div className="absolute top-0 left-0 p-8 opacity-20 transform -translate-x-1/4 -translate-y-1/4">
              <Workflow size={120} className="text-white" />
            </div>
            <div className="relative z-10 mb-24">
              <h3 className="text-[24px] font-medium leading-tight tracking-tight text-white mb-2">Universal Tool Execution</h3>
              <p className="text-[14px] text-white/80 font-medium">Powered by state-of-the-art computer vision models, Gento sees the screen, clicks interfaces, and types on keyboards to operate any desktop or web application.</p>
            </div>
            
            <div className="relative z-10">
               <button className="px-4 py-2.5 bg-white text-ink text-[14px] font-semibold rounded-[12px] group-hover:bg-opacity-90 transition-opacity">
                Watch it execute
              </button>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-brand-lavender rounded-xl p-8 flex flex-col justify-between group overflow-hidden relative"
          >
             <div className="absolute bottom-0 right-0 p-6 opacity-20 transform translate-x-1/4 translate-y-1/4">
              <Layers size={120} className="text-ink" />
            </div>
            <div className="relative z-10 mb-24">
              <h3 className="text-[24px] font-medium leading-tight tracking-tight text-ink mb-2">Self-Correcting Reasoning</h3>
              <p className="text-[14px] text-ink/80 font-medium">Gento adapts on the fly. It plans multi-step journeys, recognizes roadblocks, and dynamically corrects its own trajectory if an interface changes.</p>
            </div>
            
            <div className="relative z-10">
               <button className="px-4 py-2.5 bg-primary text-white text-[14px] font-semibold rounded-[12px] group-hover:bg-opacity-90 transition-opacity">
                Learn about the architecture
              </button>
            </div>
          </motion.div>
          
          <motion.div 
             whileHover={{ y: -4 }}
             className="md:col-span-2 bg-brand-peach rounded-xl p-8 flex flex-col md:flex-row gap-8 justify-between group relative overflow-hidden"
          >
            <div className="relative z-10 md:max-w-xs">
              <h3 className="text-[24px] font-medium leading-tight tracking-tight text-ink mb-2">Verifiable & Accurate Output</h3>
              <p className="text-[14px] text-ink/80 font-medium mb-6">Built-in verification loops ensure Gento cross-references facts, discards hallucinations, and double-checks its logic before delivering the final result.</p>
              <button className="px-4 py-2.5 bg-primary text-white text-[14px] font-semibold rounded-[12px]">
                Explore our safety rails
              </button>
            </div>
            
             <div className="relative z-10 bg-canvas rounded-lg p-4 border border-hairline flex-1 flex flex-col gap-3">
                 {/* Product UI Fragment snippet */}
                 <div className="flex justify-between items-center pb-2 border-b border-hairline">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink/40">Review Chain</span>
                    <span className="bg-brand-mint/20 text-[#1a5f4a] px-2 py-0.5 rounded text-[11px] font-bold">Verified</span>
                 </div>
                 <div className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded bg-brand-ochre/20 flex-shrink-0 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-brand-ochre">1</span>
                   </div>
                   <div className="text-[13px] font-medium text-ink">Extracted context from 14 documents.</div>
                 </div>
                  <div className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded bg-brand-ochre/20 flex-shrink-0 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-brand-ochre">2</span>
                   </div>
                   <div className="text-[13px] font-medium text-ink">Cross-referenced facts against latest financials.</div>
                 </div>
                  <div className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded bg-brand-mint/20 flex-shrink-0 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-[#1a5f4a]">3</span>
                   </div>
                   <div className="text-[13px] font-medium text-ink">Final payload generated with 0 detected anomalies.</div>
                 </div>
             </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -4 }}
            className="md:col-span-1 border border-hairline bg-surface-card rounded-xl p-8 flex flex-col justify-center items-center text-center group"
          >
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border border-hairline">
               <ExternalLink size={24} className="text-ink/50" />
            </div>
            <h3 className="text-[24px] font-medium leading-tight tracking-tight text-ink mb-2">Enterprise Ready</h3>
            <p className="text-[14px] text-ink/70">SOC2 Type II, custom webhooks, VPC peering, and BYOK support.</p>
          </motion.div>
        </section>

        {/* 3D Illustration Library Showcase */}
        <section id="library" className="py-12 md:py-[96px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
                <h2 className="text-[40px] leading-none tracking-tight font-medium text-ink md:text-display-md">Intuitively designed.</h2>
                <p className="text-[18px] text-ink/70 mt-4">Enterprise-grade capabilities shouldn't require a steep learning curve. Gento pairs industry-leading agentic infrastructure with a playful, hand-crafted interface to make automation completely accessible.</p>
            </div>
            <button className="px-5 py-2.5 bg-canvas border border-hairline text-ink text-[14px] font-semibold rounded-[12px] hover:bg-surface-card transition-colors w-fit">
              View Design System
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Abstract Shapes Card */}
            <div className="bg-surface-soft rounded-xl p-6 h-[320px] flex items-center justify-center relative overflow-hidden border border-hairline group">
               {/* Ambient Background Glow */}
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-lavender/10 to-brand-pink/5"></div>
               
               {/* 3D Abstract CSS Art */}
               <div className="relative w-48 h-48 z-10 flex items-center justify-center">
                 <motion.div 
                   animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }} 
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
                   className="absolute top-4 left-4 w-28 h-28 bg-brand-lavender rounded-full shadow-[inset_-8px_-8px_20px_rgba(0,0,0,0.15),_10px_10px_20px_rgba(0,0,0,0.05)] border-t border-l border-white/60"
                 ></motion.div>
                 
                 <motion.div 
                   animate={{ y: [5, -5, 5], rotate: [12, 0, 12], scale: [1, 1.05, 1] }} 
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
                   className="absolute bottom-4 right-4 w-24 h-24 bg-brand-peach rounded-[40px] shadow-[inset_-6px_-6px_15px_rgba(0,0,0,0.1),_5px_5px_15px_rgba(0,0,0,0.05)] border-t border-l border-white/50"
                 ></motion.div>

                 <motion.div 
                   animate={{ y: [-8, 8, -8], rotate: [-15, -5, -15] }} 
                   transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} 
                   className="relative z-10 w-20 h-20 bg-brand-pink rounded-[30%] shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.15),_0_15px_20px_-5px_rgba(0,0,0,0.1)] border-t border-l border-white/50 bg-opacity-90 backdrop-blur-md"
                 ></motion.div>
               </div>

               <div className="absolute inset-0 bg-canvas/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-20 backdrop-blur-md">
                 <span className="text-[13px] font-bold tracking-wider uppercase text-brand-pink mb-2">Concept // 01</span>
                 <span className="text-[24px] font-medium tracking-tight text-ink mb-2">Neural Engine</span>
                 <p className="text-[14px] font-medium text-ink/70 max-w-[220px] text-center">Floating clay shapes representing the dynamic reasoning paths Gento takes.</p>
               </div>
            </div>
            
             {/* Character Card */}
             <div className="bg-surface-soft rounded-xl p-6 h-[320px] flex items-center justify-center relative overflow-hidden border border-hairline group">
               {/* Ambient Background Glow */}
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/5 to-brand-mint/10"></div>
               
               {/* Mascot CSS Art */}
               <div className="relative w-full h-full flex flex-col items-center justify-center z-10">
                 <motion.div 
                   animate={{ y: [-15, 15, -15] }} 
                   transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} 
                   className="relative w-32 h-40 z-10"
                 >
                   <div className="absolute inset-0 bg-brand-teal rounded-[48px] shadow-[inset_-10px_-15px_25px_rgba(0,0,0,0.3),_inset_5px_5px_15px_rgba(255,255,255,0.2)] border-t border-white/20"></div>
                   
                   {/* Face Plate */}
                   <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-16 bg-[#faf5e8] rounded-[24px] shadow-[inset_0_4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center gap-5 border border-black/5">
                     <motion.div 
                       animate={{ scaleY: [1, 0.1, 1], y: [0, 0, 0] }} 
                       transition={{ duration: 4, repeat: Infinity, ease: "linear", times: [0, 0.05, 0.1] }} 
                       className="w-3 h-4 bg-primary rounded-full"
                     ></motion.div>
                     <motion.div 
                       animate={{ scaleY: [1, 0.1, 1], y: [0, 0, 0] }} 
                       transition={{ duration: 4, repeat: Infinity, ease: "linear", times: [0, 0.05, 0.1], delay: 0.1 }} 
                       className="w-3 h-4 bg-primary rounded-full"
                     ></motion.div>
                   </div>
                   
                   {/* Antenna */}
                   <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-2 h-8 bg-[#102424] rounded-full z-[-1]"></div>
                   <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-7 h-7 bg-brand-mint rounded-full shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.2)]"></div>
                 </motion.div>
                 
                 {/* Ground Shadow */}
                 <motion.div 
                   animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.1, 0.03, 0.1] }} 
                   transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} 
                   className="absolute bottom-16 w-28 h-4 bg-primary rounded-full blur-md"
                 ></motion.div>
               </div>

               <div className="absolute inset-0 bg-canvas/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-20 backdrop-blur-md">
                 <span className="text-[13px] font-bold tracking-wider uppercase text-brand-teal mb-2">Concept // 02</span>
                 <span className="text-[24px] font-medium tracking-tight text-ink mb-2">The Agent</span>
                 <p className="text-[14px] font-medium text-ink/70 max-w-[220px] text-center">A friendly face representing your new autonomous workforce.</p>
               </div>
            </div>

            {/* Terrain Card */}
            <div className="bg-surface-soft rounded-xl p-6 h-[320px] flex items-center justify-center relative overflow-hidden border border-hairline group">
               {/* Ambient Background Glow */}
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-ochre/10 to-brand-pink/5"></div>
               
               {/* Terrain CSS Art */}
               <div className="relative w-full h-[150%] flex items-end justify-center pb-8 z-10">
                 {/* Back Mountain */}
                 <motion.div 
                   animate={{ y: [-4, 4, -4] }} 
                   transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} 
                   className="absolute bottom-20 right-4 w-48 h-64 bg-brand-peach rounded-[60px] rotate-[15deg] shadow-[inset_10px_-10px_25px_rgba(0,0,0,0.15)] border-t border-l border-white/40"
                 ></motion.div>
                 
                 {/* Front Mountain */}
                 <motion.div 
                   animate={{ y: [-8, 8, -8] }} 
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
                   className="absolute bottom-12 left-4 w-40 h-56 bg-brand-pink rounded-[48px] rotate-[-12deg] shadow-[inset_-10px_-10px_25px_rgba(0,0,0,0.15),_10px_10px_20px_rgba(0,0,0,0.05)] border-t border-r border-white/40"
                 ></motion.div>

                 {/* Arch/Sun element */}
                 <motion.div 
                   animate={{ y: [-12, 12, -12] }} 
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }} 
                   className="absolute bottom-32 left-1/2 -translate-x-1/2 w-24 h-24 bg-brand-ochre rounded-full shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.15)] border-t border-l border-white/50"
                 ></motion.div>
                 
                 {/* Foreground Base */}
                 <motion.div 
                   animate={{ y: [-2, 2, -2] }} 
                   transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
                   className="absolute -bottom-20 w-[140%] h-48 bg-surface-card rounded-[100%] shadow-[inset_0_20px_30px_rgba(255,255,255,0.6)] mix-blend-overlay"
                 ></motion.div>
               </div>

               <div className="absolute inset-0 bg-canvas/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-20 backdrop-blur-md">
                 <span className="text-[13px] font-bold tracking-wider uppercase text-brand-ochre mb-2">Concept // 03</span>
                 <span className="text-[24px] font-medium tracking-tight text-ink mb-2">Data Topography</span>
                 <p className="text-[14px] font-medium text-ink/70 max-w-[220px] text-center">Visualizing the massive scale of information Gento processess seamlessly.</p>
               </div>
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="py-12 md:py-[96px] px-6 md:px-12 max-w-[1440px] mx-auto">
           <div className="bg-surface-soft rounded-xl p-12 md:p-20 text-center flex flex-col items-center border border-hairline relative overflow-hidden">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-pink rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-brand-ochre rounded-full opacity-10 blur-3xl"></div>
              
              <h2 className="text-[40px] leading-none tracking-tight font-medium md:text-display-lg text-ink max-w-2xl relative z-10 mb-6">
                Scale your operations instantly.
              </h2>
              <p className="text-[18px] text-ink/80 mb-10 max-w-xl relative z-10">
                Hire your first autonomous agent today. Start scaling your operations, research, and workflows instantly without adding headcount.
              </p>
              
              <button className="px-8 py-4 bg-primary text-white text-[16px] font-semibold rounded-[12px] hover:bg-opacity-90 transition-opacity relative z-10 flex items-center gap-2">
                Book a Demo <ChevronRight size={18} />
              </button>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-soft pt-[80px] pb-[40px] px-6 border-t border-surface-card">
         <div className="max-w-[1440px] px-0 md:px-6 mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <span className="text-xl font-bold tracking-tight">Gento</span>
              </div>
              <p className="text-[14px] text-ink/60 font-medium max-w-xs leading-relaxed">
                The autonomous workforce platform for ambitious teams. Let agents do the heavy lifting.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="text-[12px] font-bold text-ink uppercase tracking-wider mb-2">Product</span>
              <a href="#" className="text-[14px] font-medium text-ink/70 hover:text-brand-pink transition-colors">Agents</a>
              <a href="#" className="text-[14px] font-medium text-ink/70 hover:text-brand-pink transition-colors">Workflows</a>
              <a href="#" className="text-[14px] font-medium text-ink/70 hover:text-brand-pink transition-colors">Integrations</a>
              <a href="#" className="text-[14px] font-medium text-ink/70 hover:text-brand-pink transition-colors">Security</a>
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="text-[12px] font-bold text-ink uppercase tracking-wider mb-2">Company</span>
              <a href="#" className="text-[14px] font-medium text-ink/70 hover:text-brand-pink transition-colors">About Us</a>
              <a href="#" className="text-[14px] font-medium text-ink/70 hover:text-brand-pink transition-colors">Careers</a>
              <a href="#" className="text-[14px] font-medium text-ink/70 hover:text-brand-pink transition-colors">Manifesto</a>
              <a href="#" className="text-[14px] font-medium text-ink/70 hover:text-brand-pink transition-colors">Contact</a>
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="text-[12px] font-bold text-ink uppercase tracking-wider mb-2">Legal</span>
              <a href="#" className="text-[14px] font-medium text-ink/70 hover:text-brand-pink transition-colors">Privacy Policy</a>
              <a href="#" className="text-[14px] font-medium text-ink/70 hover:text-brand-pink transition-colors">Terms of Service</a>
            </div>
         </div>
         
         <div className="max-w-[1440px] px-0 md:px-6 mx-auto pt-8 border-t border-hairline flex flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[14px] text-ink/60">gento.ai</span>
              <div className="w-2 h-2 bg-brand-ochre rounded-full"></div>
              <span className="text-[14px] text-ink/60">© {new Date().getFullYear()}</span>
            </div>
         </div>
      </footer>
    </div>
  );
}

