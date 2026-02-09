// Importing the necessary modules 
import { Fragment } from 'react';
import { Camera, Frame, Image  as ShoppingCart, Instagram, Phone, MapPin } from 'lucide-react';

// Creating the footer component 
const Footer = () => {
    // Rendering the jsx component 
    return(
        <Fragment> 
            {/* About & Contact Footer */}
            <footer id="contact" className="bg-stone-900 text-stone-300 py-20">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div id="about">
                <h4 className="text-white text-xl font-serif mb-6">About The Frame Gallery</h4>
                <p className="leading-relaxed mb-6">
                    Based in Nigeria, we are dedicated to the art of presentation. 
                    Our craftsmen combine traditional techniques with modern aesthetics 
                    to ensure your memories are preserved for a lifetime.
                </p>
                <div className="flex space-x-4">
                    <a href="https://instagram.com/theframegallery.ng" className="hover:text-amber-500"><Instagram /></a>
                    <a href="https://wa.me/2349068898645" className="hover:text-amber-500" target="_blank" rel="noopener noreferrer"><Phone /></a>
                </div>
                </div>
                
                <div>
                <h4 className="text-white text-xl font-serif mb-6">Contact Us</h4>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                    <MapPin size={18} className="text-amber-500" /> Lagos, Nigeria
                    </li>
                    <li className="flex items-center gap-3">
                    <Phone size={18} className="text-amber-500" /> +234 9068898645
                    </li>
                    <li className="flex items-center gap-3">
                    <Camera size={18} className="text-amber-500" /> @theframegallery.ng
                    </li>
                </ul>
                </div>

                <div>
                <h4 className="text-white text-xl font-serif mb-6">Newsletter</h4>
                <p className="mb-4">Get 10% off your first custom frame.</p>
                <div className="flex">
                    <input type="email" placeholder="Email address" className="bg-stone-800 border-none rounded-l-lg px-4 py-3 w-full focus:ring-1 focus:ring-amber-500" />
                    <button className="bg-amber-700 text-white px-6 py-3 rounded-r-lg hover:bg-amber-800">Join</button>
                </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-stone-800 text-center text-sm">
                © {new Date().getFullYear()} The Frame Gallery Nigeria. All rights reserved.
            </div>
            </footer>  
        </Fragment>
    )
}

// Exporting the footer 
export default Footer; 