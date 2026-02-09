// Importing the necessary modules 
import { Fragment } from 'react';
import { Link } from 'react-router-dom'; // Assuming you use react-router for navigation
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import { MoveLeft, Frame } from 'lucide-react';

// Creating the Error 404 component 
const ErrorPage = () => {
  return (
    <Fragment>
      <div className="min-h-screen bg-stone-50 text-stone-900 font-sans flex flex-col">
        {/* Adding the navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow flex items-center justify-center px-4 py-100 pt-20 mt-[100px] mb-[200px]">
          <div className="max-w-3xl w-full text-center">
            
            {/* Visual Element: The "Empty Frame" Concept */}
            <div className="relative inline-block mb-12">
              <div className="w-64 h-80 md:w-80 md:h-96 border-[16px] border-stone-800 shadow-2xl mx-auto flex items-center justify-center bg-stone-200/50 relative overflow-hidden">
                {/* Decorative background "ghost" frame */}
                <Frame size={120} className="text-stone-300 absolute transform -rotate-12 opacity-20" />
                
                <div className="z-10">
                  <h1 className="text-8xl md:text-9xl font-serif font-bold text-stone-800 tracking-tighter">
                    404
                  </h1>
                </div>
              </div>
              
              {/* Artistic Accent */}
              <div className="absolute -bottom-4 -right-4 bg-amber-700 text-white px-6 py-2 rounded-full text-sm font-medium shadow-xl">
                Missing Piece
              </div>
            </div>

            {/* Messaging */}
            <h2 className="text-3xl md:text-4xl font-serif mb-6 italic">
              This frame is currently empty
            </h2>
            <p className="text-stone-600 text-lg mb-10 max-w-md mx-auto leading-relaxed">
              The page you are looking for has been moved, deleted, or perhaps it was never painted in the first place.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/" 
                className="bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-amber-800 transition-all flex items-center gap-2 group shadow-lg"
              >
                <MoveLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                Back to Gallery
              </Link>
              
              <Link 
                to="/contact" 
                className="border border-stone-300 px-8 py-4 rounded-full font-medium hover:bg-stone-100 transition-all text-stone-700"
              >
                Report a Problem
              </Link>
            </div>
          </div>
        </main>

        {/* Adding the footer */}
        <Footer />
      </div>
    </Fragment>
  );
};

// Exporting the component 
export default ErrorPage;