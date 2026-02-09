import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Ruler, Check, ArrowLeft } from 'lucide-react';

const CustomRequestPage = ({ onBack }) => {
  const [selectedFrameId, setSelectedFrameId] = useState(null);
  const [selections, setSelections] = useState({
    glass: 'With Glass',
    board: 'Mat Board',
    style: 'Canvas Print',
    dimensions: '',
    color: 'Natural Wood'
  });

  const frameOptions = [
    { category: 'Glass Option', key: 'glass', options: ['With Glass', 'No Glass', 'Anti-Glare'] },
    { category: 'Interior Layer', key: 'board', options: ['Mat Board', 'No Mat Board', 'Crystals'] },
    { category: 'Print Material', key: 'style', options: ['Canvas Print', 'Solar Print', 'Photo Paper'] }
  ];

  const designGallery = [
    { id: 1, src: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=400", title: "Classic Oak" },
    { id: 2, src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=400", title: "Royal Gold" },
    { id: 3, src: "https://images.unsplash.com/photo-1513519247388-19345420d939?auto=format&fit=crop&q=80&w=400", title: "Modern Black" },
    { id: 4, src: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=400", title: "Gallery White" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="fixed inset-0 z-[100] bg-white w-full h-full overflow-y-auto"
      style={{ scrollBehavior: 'smooth' }}
    >
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-stone-100 px-6 py-4 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors font-medium"
        >
          <ArrowLeft size={20} /> Back to Dashboard
        </button>
        <span className="text-xs font-bold uppercase tracking-widest text-amber-800">Custom Request Studio</span>
        <button 
          onClick={onBack}
          className="p-2 hover:bg-stone-100 rounded-full transition-colors"
        >
          <X size={24} />
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-stone-900">Configure Your Frame</h1>
          <p className="text-stone-500 italic text-lg">Every detail is handcrafted by Amy to your specification.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {/* Left Side: Property Selection */}
          <div className="space-y-12">
            {frameOptions.map((group) => (
              <div key={group.key}>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800 mb-6">{group.category}</h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  {group.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelections({...selections, [group.key]: opt})}
                      className={`px-8 py-3 rounded-full text-sm font-medium transition-all border ${
                        selections[group.key] === opt 
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xl' 
                        : 'bg-white text-stone-600 border-stone-200 hover:border-amber-700'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                {/* Compact Swatches under Print Material */}
                {group.key === 'style' && (
                  <div className="mt-6 p-6 bg-stone-50 rounded-[2rem] border border-stone-100">
                    <p className="text-[10px] font-bold text-stone-400 uppercase mb-4 tracking-widest">Select Frame Style</p>
                    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                      {designGallery.map((frame) => (
                        <div 
                          key={frame.id}
                          onClick={() => setSelectedFrameId(frame.id)}
                          className={`relative flex-shrink-0 w-10 h-10 cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                            selectedFrameId === frame.id 
                            ? 'ring-2 ring-amber-700 ring-offset-2 scale-110 shadow-md' 
                            : 'opacity-50 grayscale hover:opacity-100 hover:grayscale-0'
                          }`}
                        >
                          <img src={frame.src} alt={frame.title} className="w-full h-full object-cover" />
                          {selectedFrameId === frame.id && (
                            <div className="absolute inset-0 bg-amber-700/10 flex items-center justify-center">
                              <Check size={14} className="text-white drop-shadow-md" strokeWidth={4} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side: Dimensions & Final Steps */}
          <div className="space-y-12">
            <div className="bg-white">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800 mb-6 flex items-center gap-2">
                <Ruler size={14}/> Dimensions & Special Requests
              </h3>
              <textarea 
                className="w-full p-6 bg-stone-50 border border-stone-100 rounded-[2rem] focus:ring-2 focus:ring-amber-700/20 focus:bg-white outline-none text-sm leading-relaxed transition-all min-h-[160px]"
                placeholder="e.g., 24x36 inches. Mention specific color changes or artisan details here..."
                value={selections.dimensions}
                onChange={(e) => setSelections({...selections, dimensions: e.target.value})}
              />
            </div>

            <div className="bg-stone-900 p-8 md:p-10 rounded-[2.5rem] text-white shadow-2xl">
                <h4 className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-8">Summary of Selection</h4>
                <div className="space-y-4 text-sm opacity-90">
                    <p className="flex justify-between border-b border-white/10 pb-3"><span>Material:</span> <span className="font-bold">{selections.style}</span></p>
                    <p className="flex justify-between border-b border-white/10 pb-3"><span>Layering:</span> <span className="font-bold">{selections.board}</span></p>
                    <p className="flex justify-between border-b border-white/10 pb-3"><span>Glass:</span> <span className="font-bold">{selections.glass}</span></p>
                </div>
                
                <button 
                  onClick={() => console.log("Final Order:", selections)}
                  className="w-full mt-10 bg-amber-700 hover:bg-amber-600 text-white py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 shadow-lg active:scale-95"
                >
                  Submit Order to Amy <Check size={20} />
                </button>
            </div>

            <p className="text-[10px] text-center text-stone-400 uppercase tracking-widest leading-loose">
              Amy will review your selections personally.<br/>
              Crafting begins only after your DM confirmation.
            </p>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default CustomRequestPage;