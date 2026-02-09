// Importing the necessary modules 
import { Fragment } from 'react';
import Footer from "@components/Footer/Footer"; 
import Navbar from '@components/Navbar/Navbar';
import { Award, Users, Heart, Brush, Box, ShieldCheck } from 'lucide-react';

// Creating the about component 
const About = () => {
    // Setting the about title 
    document.title = "About"; 

    // Setting the stats 
    const stats = [
    { label: 'Frames Crafted', value: '10k+' },
    { label: 'Happy Clients', value: '4.8k' },
    { label: 'Years Experience', value: '12+' },
    { label: 'Artisan Partners', value: '25+' },
    ];

    // Rendering the component 
    return (
    <Fragment> 
        <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
            {/* Adding the navbar */}
            <Navbar />

            {/* Hero / Story Section */}
            <section className="pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&fit=crop&q=80&w=800" 
                        alt="Craftsman at work" 
                        className="w-full h-full object-cover"
                    />
                    </div>
                    <div className="absolute -bottom-10 -right-10 hidden md:block w-64 h-64 border-8 border-white rounded-2xl overflow-hidden shadow-xl">
                    <img 
                        src="https://images.unsplash.com/photo-1513519247388-19345420d939?auto=format&fit=crop&q=80&w=600" 
                        alt="Finished Frame" 
                        className="w-full h-full object-cover"
                    />
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-amber-700 font-bold tracking-widest uppercase text-sm">Our Story</h2>
                    <h1 className="text-5xl font-serif leading-tight">
                    Where Tradition <br /> 
                    <span className="italic">Meets Modernity</span>
                    </h1>
                    <p className="text-stone-600 text-lg leading-relaxed">
                    Founded in the heart of Nigeria, <b> The Frame Gallery </b> began with a simple belief: every memory deserves a throne. We don't just "frame" pictures; we preserve legacies using the finest Nigerian timber and museum-grade materials.
                    </p>
                    <p className="text-stone-600 text-lg leading-relaxed">
                    Our workshop combines decades of joinery expertise with contemporary design aesthetics, ensuring that whether you are framing a child's first drawing or a masterpiece oil painting, the result is nothing short of breathtaking.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-8 pt-8">
                    {stats.map((stat, i) => (
                        <div key={i}>
                        <p className="text-3xl font-serif text-amber-800">{stat.value}</p>
                        <p className="text-stone-500 text-sm uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-stone-900 text-stone-100">
            <div className="max-w-7xl mx-auto px-4 text-center mb-16">
                <h2 className="text-4xl font-serif mb-4 italic text-amber-500">Why Choose Us?</h2>
                <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="p-8 border border-stone-800 rounded-3xl hover:bg-stone-800/50 transition-colors">
                <Brush className="text-amber-500 mb-6" size={40} />
                <h3 className="text-xl font-bold mb-4">Artisan Crafted</h3>
                <p className="text-stone-400">Every corner is hand-joined and every finish is hand-applied by our master framers.</p>
                </div>
                <div className="p-8 border border-stone-800 rounded-3xl hover:bg-stone-800/50 transition-colors">
                <ShieldCheck className="text-amber-500 mb-6" size={40} />
                <h3 className="text-xl font-bold mb-4">Archival Quality</h3>
                <p className="text-stone-400">We use acid-free mats and UV-protective glass to ensure your art doesn't fade over time.</p>
                </div>
                <div className="p-8 border border-stone-800 rounded-3xl hover:bg-stone-800/50 transition-colors">
                <Users className="text-amber-500 mb-6" size={40} />
                <h3 className="text-xl font-bold mb-4">Personal Consultation</h3>
                <p className="text-stone-400">Our curators work with you one-on-one to find the perfect style for your space.</p>
                </div>
            </div>
            </section>

            {/* Meet the Founder / Mission */}
            <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto bg-amber-50 rounded-[3rem] p-12 md:p-20 text-center border border-amber-100">
                <Heart className="text-amber-700 mx-auto mb-6" size={32} />
                <h2 className="text-3xl md:text-4xl font-serif mb-8 italic">
                "We believe that a well-framed piece of art can change the entire energy of a home."
                </h2>
                <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-stone-200 mb-4 overflow-hidden">
                    {/* Placeholder for Founder Image */}
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" alt="Founder" />
                </div>
                <p className="font-bold text-stone-900">The Frame Gallery Team</p>
                <p className="text-stone-500 text-sm italic">Est. 2012</p>
                </div>
            </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white border-t border-stone-200">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
                <h2 className="text-4xl font-serif mb-6">Ready to start your project?</h2>
                <div className="flex gap-4">
                    <button className="bg-stone-900 text-white px-10 py-4 rounded-full font-bold hover:bg-stone-800 transition-all shadow-lg">
                    Book a Consultation
                    </button>
                    <button className="border border-stone-300 px-10 py-4 rounded-full font-bold hover:bg-stone-100 transition-all">
                    View Collections
                    </button>
                </div>
            </div>
            </section>
            
            {/* Adding the footer  */}
            <Footer /> 
        </div>
    </Fragment>
    );
};

export default About;