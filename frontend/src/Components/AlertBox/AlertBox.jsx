// Importing the necessary modules 
import { Fragment, useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Creating a component for the alert box 
const AlertBox = ({status, alertMessage}) => {
    console.log(alertMessage); 
    // Rendering the component 
    return(
        <Fragment> 
            {/* Sliding Alert Component */}
            <AnimatePresence>
                <motion.div 
                    initial={{ x: -400, opacity: 0 }}
                    animate={{ x: 20, opacity: 1 }}
                    exit={{ x: -400, opacity: 0 }}
                    className="fixed top-24 left-0 z-[60] flex items-center gap-4 bg-stone-900 text-white p-4 rounded-2xl shadow-2xl border border-white/10 w-[90%] max-w-sm"
                >
                    <div className="bg-amber-500 p-2 rounded-full text-stone-900">
                        <CheckCircle2 size={24} />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-sm"> {status} </h4>
                        <p className="text-xs text-stone-400"> {alertMessage} </p>
                    </div>
                    <button onClick={() => setShowAlert(false)} className="p-1 hover:bg-white/10 rounded-lg">
                        <X size={18} />
                    </button>
                </motion.div>
            </AnimatePresence>
        </Fragment>
    )
}

// Exporting the alert box 
export default AlertBox; 