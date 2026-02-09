import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Ruler, Check } from 'lucide-react';

const CustomRequestModal = ({ isOpen, onClose }) => {
  // Enhanced state to track all properties including the selected frame design
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose} className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" 
          />
          
          {/* Modal Container */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-white w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-[2.5rem] shadow-2xl relative z-10 p-6 md:p-12
                       scrollbar-thin scrollbar-thumb-amber-700 scrollbar-track-stone-100"
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* Close Button */}
            <button onClick={onClose} className="sticky top-0 float-right p-2 bg-white/80 backdrop-blur-md hover:bg-stone-100 rounded-full transition-colors z-20 shadow-sm">
              <X size={24} />
            </button>

            <header className="mb-10 text-center md:text-left clear-both">
              <h2 className="text-3xl font-serif mb-2">Configure Your Frame</h2>
              <p className="text-stone-500 italic">Every detail is handcrafted to your specification.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Side: Property Selection */}
              <div className="space-y-10">
                {frameOptions.map((group) => (
                  <div key={group.key}>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-amber-800 mb-4">{group.category}</h3>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {group.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setSelections({...selections, [group.key]: opt})}
                          className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                            selections[group.key] === opt 
                            ? 'bg-stone-900 text-white border-stone-900 shadow-md' 
                            : 'bg-white text-stone-600 border-stone-200 hover:border-amber-700'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>

                    {/* Horizontal Selection Gallery - Shows specifically under Print Material */}
                    {group.key === 'style' && (
                      <div className="mt-4">
                        <p className="text-xs font-bold text-stone-400 uppercase mb-3">Select Frame Design Style</p>
                        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
                          {designGallery.map((frame) => (
                            <div 
                              key={frame.id}
                              onClick={() => setSelectedFrameId(frame.id)}
                              className={`relative flex-shrink-0 w-28 h-28 cursor-pointer rounded-2xl overflow-hidden snap-center transition-all duration-300 ${
                                selectedFrameId === frame.id 
                                ? 'ring-4 ring-amber-700 ring-offset-2 scale-95 shadow-lg' 
                                : 'opacity-70 hover:opacity-100'
                              }`}
                            >
                              <img src={frame.src} alt={frame.title} className="w-full h-full object-cover" />
                              {selectedFrameId === frame.id && (
                                <div className="absolute inset-0 bg-amber-700/20 flex items-center justify-center">
                                  <div className="bg-white rounded-full p-1 shadow-lg">
                                    <Check size={16} className="text-amber-700" strokeWidth={3} />
                                  </div>
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
              <div className="flex flex-col">
                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-amber-800 mb-4 flex items-center gap-2">
                    <Ruler size={16}/> Dimensions & Requirements
                  </h3>
                  <textarea 
                    className="w-full p-5 bg-stone-50 border border-stone-200 rounded-3xl focus:ring-2 focus:ring-amber-700 focus:bg-white transition-all outline-none text-sm leading-relaxed"
                    placeholder="e.g., 24x36 inches. Please note any specific color modifications or special glass requests here."
                    rows="4"
                    onChange={(e) => setSelections({...selections, dimensions: e.target.value})}
                  />
                </div>

                <div className="bg-stone-50 p-6 rounded-[2rem] border border-stone-100 mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Summary of Selection</h4>
                    <div className="space-y-2 text-sm">
                        <p className="flex justify-between"><span>Material:</span> <span className="font-bold">{selections.style}</span></p>
                        <p className="flex justify-between"><span>Layering:</span> <span className="font-bold">{selections.board}</span></p>
                        <p className="flex justify-between"><span>Glass:</span> <span className="font-bold">{selections.glass}</span></p>
                    </div>
                </div>

                <div className="mt-auto">
                  <button className="group w-full bg-stone-900 text-white py-5 rounded-2xl font-bold hover:bg-amber-800 transition-all shadow-xl flex items-center justify-center gap-3">
                    Send Order to Amy <Check size={20} className="group-hover:scale-110 transition-transform" />
                  </button>
                  <p className="text-[10px] text-center text-stone-400 mt-5 uppercase tracking-widest">
                    Crafting begins only after your DM confirmation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CustomRequestModal;