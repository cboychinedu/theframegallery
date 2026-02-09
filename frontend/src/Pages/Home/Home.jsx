// Importing the necessary modules 
import { useState, Fragment } from 'react';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import { Frame, Image  as ShoppingCart } from 'lucide-react';

// Creating the home component jsx 
const Home = () => {
  // Setting the state 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { name: 'Minimalist Wood', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800', price: 'From ₦15,000' },
    { name: 'Ornate Gold', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800', price: 'From ₦25,000' },
    { name: 'Gallery Sets', image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=800', price: 'From ₦45,000' },
    { name: 'Minimalist Wood', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800', price: 'From ₦15,000' },
    { name: 'Ornate Gold', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800', price: 'From ₦25,000' },
    { name: 'Gallery Sets', image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=800', price: 'From ₦45,000' },
  ];

  return (
    <Fragment> 
      <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
        {/* Adding the navbar */}
        <Navbar /> 

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-serif font-light leading-tight mb-6">
                Preserve your <br />
                <span className="italic font-normal">favorite moments</span>
              </h1>
              <p className="text-stone-600 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                Premium custom framing and curated wall art for Nigerian homes. 
                From minimalist designs to luxury ornate borders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-amber-700 text-white px-8 py-4 rounded-full font-medium hover:bg-amber-800 transition-all flex items-center justify-center gap-2">
                  Shop the Gallery <ShoppingCart size={20} />
                </button>
                <button className="border border-stone-300 px-8 py-4 rounded-full font-medium hover:bg-stone-100 transition-all">
                  Custom Framing
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80&w=600" alt="Frame 1" className="rounded-2xl shadow-2xl mt-8" />
                <img src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=600" alt="Frame 2" className="rounded-2xl shadow-2xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-700">
                    <Frame size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">100% Handcrafted</p>
                    <p className="text-xs text-stone-500">Premium quality wood</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories / Shop */}
        <section className="py-20 bg-stone-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-serif mb-2">Our Collections</h2>
                <p className="text-stone-500">Find the perfect frame for your space</p>
              </div>
              <button className="text-amber-700 font-semibold border-b-2 border-amber-700 pb-1">View All</button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((cat, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4">
                    <img src={cat.image} alt={cat.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">New</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{cat.name}</h3>
                  <p className="text-stone-500">{cat.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Adding the footer */}
        <Footer /> 
      </div>
    </Fragment>
  );
};

// Exporting the home component 
export default Home;