// Importing the necessary modules 
import { Fragment } from 'react';
import Footer from "@components/Footer/Footer"; 
import Navbar from '@components/Navbar/Navbar';
import { Truck, ShieldCheck, Palette, Hammer, Box, PhoneCall } from 'lucide-react';

// Creating the services component 
const Services = () => {
    // Setting the title 
    document.title = "Services"; 

    // Setting the service features 
    const serviceFeatures = [
    {
        title: "Artisan Construction",
        description: "Every frame is precision-cut and hand-joined by master craftsmen. We use premium kiln-dried timber to ensure your frames never warp or bend.",
        icon: <Hammer className="text-amber-700" size={32} />,
    },
    {
        title: "Fine Finishing",
        description: "Our frames undergo a 3-step sanding and staining process. From deep ebony to ornate gold gilding, the finish is smooth, durable, and luxurious.",
        icon: <Palette className="text-amber-700" size={32} />,
    },
    {
        title: "Archival Quality",
        description: "We protect your memories with acid-free mount boards and UV-protective acrylic, ensuring your photos and art remain vibrant for decades.",
        icon: <ShieldCheck className="text-amber-700" size={32} />,
    }
    ];

    // Rendering the component 
    return (
        <Fragment> 
            <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
                {/* Adding the navbar */}
                <Navbar />

                {/* Hero Section */}
                <section className="pt-32 pb-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-amber-700 font-bold tracking-widest uppercase text-sm mb-4">Theframegallery.ng by Amy</h2>
                    <h1 className="text-5xl md:text-6xl font-serif mb-6 italic">Redefining your Space in Style</h1>
                    <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
                    From our online store to your doorstep, we provide museum-grade framing solutions 
                    tailored to your unique aesthetic.
                    </p>
                </div>
                </section>

                {/* Craftsmanship Section */}
                <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                    <h2 className="text-3xl font-serif mb-6 underline decoration-amber-700/30">Well Furnished & Finely Crafted</h2>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                        At <b> The Frame Gallery </b>, construction is an art form. We don't believe in mass-produced plastic. 
                        Each frame is constructed using reinforced corner joints and internal bracing.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex gap-3 items-center text-stone-700 font-medium italic">
                        <span className="w-2 h-2 bg-amber-700 rounded-full"></span> Hand-rubbed wax finishes for natural wood
                        </li>
                        <li className="flex gap-3 items-center text-stone-700 font-medium italic">
                        <span className="w-2 h-2 bg-amber-700 rounded-full"></span> Expertly mitered edges for seamless corners
                        </li>
                        <li className="flex gap-3 items-center text-stone-700 font-medium italic">
                        <span className="w-2 h-2 bg-amber-700 rounded-full"></span> Premium backing paper for a dust-free seal
                        </li>
                    </ul>
                    </div>
                    <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img 
                        src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&fit=crop&q=80&w=800" 
                        alt="Framing Process" 
                        className="w-full h-full object-cover"
                    />
                    </div>
                </div>
                </section>

                {/* Service Cards */}
                <section className="py-20 bg-stone-100 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {serviceFeatures.map((feature, index) => (
                    <div key={index} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-stone-200">
                        <div className="mb-6">{feature.icon}</div>
                        <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                        <p className="text-stone-500 leading-relaxed">{feature.description}</p>
                    </div>
                    ))}
                </div>
                </section>

                {/* Nationwide Delivery Section */}
                <section className="py-24 px-4 bg-stone-900 text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                    <div className="flex items-center gap-4 mb-6">
                        <Truck className="text-amber-500" size={40} />
                        <h2 className="text-4xl font-serif italic">Nationwide Delivery</h2>
                    </div>
                    <p className="text-stone-400 text-lg mb-8 leading-relaxed">
                        No matter where you are in Nigeria, our frames reach you in perfect condition. 
                        We utilize <b> Multi-Layer Impact Protection </b> packaging—including shock-absorbent foam and 
                        wooden crates for large orders—to ensure your glass arrives shatter-free.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="flex items-center gap-3">
                        <Box className="text-amber-500" />
                        <span>Reinforced Packaging</span>
                        </div>
                        <div className="flex items-center gap-3">
                        <ShieldCheck className="text-amber-500" />
                        <span>Transit Insurance</span>
                        </div>
                    </div>
                    </div>
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                    <h3 className="text-2xl font-serif mb-6 text-amber-500">Ready to Order?</h3>
                    <p className="mb-8 text-stone-300">Browse our online store or contact Amy directly for custom dimensions.</p>
                    <div className="space-y-4">
                        <a href="tel:09068898645" className="flex items-center justify-center gap-3 bg-amber-700 w-full py-4 rounded-xl font-bold hover:bg-amber-600 transition-colors">
                        <PhoneCall size={20} /> 09068898645
                        </a>
                        <button className="flex items-center justify-center gap-3 bg-transparent border border-white/20 w-full py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
                        Send a DM
                        </button>
                    </div>
                    </div>
                </div>
                </section>

                {/* Adding the footer */}
                <Footer /> 
            </div>
        </Fragment>
    );
};

// Exporting the services component 
export default Services;