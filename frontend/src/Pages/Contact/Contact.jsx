// Importing the necessary modules 
import { Fragment} from 'react';
import Navbar from '@components/Navbar/Navbar';
import { Phone, Mail, MapPin, Instagram, Clock, Send } from 'lucide-react';
import Footer from '@components/Footer/Footer';

// Creating the contact component 
const Contact = () => {
   // Setting the title 
   document.title = "Contact"; 
   
  // Rendering the component 
  return (
    <Fragment>
        <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
            <Navbar />

            {/* Header Section */}
            <section className="pt-32 pb-12 bg-stone-100 border-b border-stone-200">
                <div className="max-w-7xl mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-serif mb-4 italic">Get in Touch</h1>
                <p className="text-stone-600 max-w-2xl mx-auto text-lg">
                    Have a specific piece that needs the perfect frame? Our consultants are ready to help you preserve your most cherished memories.
                </p>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    
                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100">
                    <h2 className="text-2xl font-serif mb-8">Send us a Message</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-stone-600">Full Name</label>
                            <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-700 focus:outline-none transition-all" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-stone-600">Email Address</label>
                            <input type="email" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-700 focus:outline-none transition-all" placeholder="john@example.com" />
                        </div>
                        </div>
                        
                        <div>
                        <label className="block text-sm font-medium mb-2 text-stone-600">Subject</label>
                        <select className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-700 focus:outline-none transition-all">
                            <option>Custom Frame Inquiry</option>
                            <option>Bulk/Corporate Orders</option>
                            <option>Order Status</option>
                            <option>Art Consultation</option>
                        </select>
                        </div>

                        <div>
                        <label className="block text-sm font-medium mb-2 text-stone-600">Message</label>
                        <textarea rows="5" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-700 focus:outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                        </div>

                        <button className="w-full bg-amber-700 text-white py-4 rounded-xl font-bold hover:bg-amber-800 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                        Send Message <Send size={18} />
                        </button>
                    </form>
                    </div>

                    {/* Contact Info & Details */}
                    <div className="flex flex-col justify-center space-y-12">
                    <div>
                        <h2 className="text-3xl font-serif mb-6">Information</h2>
                        <div className="space-y-8">
                        <div className="flex items-start gap-5">
                            <div className="bg-amber-100 p-4 rounded-2xl text-amber-800">
                            <MapPin size={24} />
                            </div>
                            <div>
                            <h4 className="font-bold text-lg">Visit the Gallery</h4>
                            <p className="text-stone-500">No. 12 Art Avenue, Victoria Island,<br />Lagos, Nigeria.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="bg-amber-100 p-4 rounded-2xl text-amber-800">
                            <Phone size={24} />
                            </div>
                            <div>
                            <h4 className="font-bold text-lg">Call or WhatsApp</h4>
                            <p className="text-stone-500">+234 (0) 800 123 4567</p>
                            <p className="text-stone-500">+234 (0) 700 987 6543</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="bg-amber-100 p-4 rounded-2xl text-amber-800">
                            <Clock size={24} />
                            </div>
                            <div>
                            <h4 className="font-bold text-lg">Gallery Hours</h4>
                            <p className="text-stone-500">Mon - Fri: 9:00 AM - 6:00 PM</p>
                            <p className="text-stone-500">Sat: 10:00 AM - 4:00 PM</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="p-8 bg-stone-900 rounded-3xl text-white">
                        <h4 className="text-xl font-serif mb-4 text-amber-500">Join our community</h4>
                        <p className="text-stone-400 mb-6">Follow us for framing tips and new art drops.</p>
                        <div className="flex gap-4">
                        <a href="https://instagram.com/theframegallery.ng" className="p-3 bg-white/10 rounded-full hover:bg-amber-700 transition-all">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-amber-700 transition-all">
                            <Mail size={20} />
                        </a>
                        </div>
                    </div>
                    </div>

                </div>
                </div>
            </section>

            {/* Embedded Map Mockup */}
            <section className="h-96 w-full bg-stone-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center grayscale opacity-50">
                {/* Replace this with a Google Maps Iframe if you have a real address */}
                <p className="text-stone-400 font-serif italic text-2xl">[ Interactive Gallery Map ]</p>
                </div>
            </section>
            
            {/* Reusing your footer layout or adding a simple copyright */}
            <Footer /> 
        </div>
    </Fragment>
    
  );
};

export default Contact;