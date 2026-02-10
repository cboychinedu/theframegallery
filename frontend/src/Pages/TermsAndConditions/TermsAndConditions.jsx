// Importing the necessary modules 
import React, { Fragment } from 'react';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import { ShieldCheck, Scale, Truck, CreditCard, RefreshCw } from 'lucide-react';

// Creating the terms and conditions components 
const TermsAndConditions = () => {
  const sections = [
    {
      title: "Service Overview",
      icon: <ShieldCheck className="text-amber-700" />,
      content: "The Frame Gallery provides premium custom framing and wall art services. By using our website and placing an order, you agree to be bound by these terms. We specialize in handcrafted frames using high-quality wood and artisan materials."
    },
    {
      title: "Custom Framing & Measurements",
      icon: <Scale className="text-amber-700" />,
      content: "For custom requests, the customer is responsible for providing accurate dimensions. While Amy provides consultation via DM to ensure precision, the final dimensions submitted in the 'Custom Request Studio' are considered final once production begins."
    },
    {
      title: "Payment Terms",
      icon: <CreditCard className="text-amber-700" />,
      content: "All prices are in Nigerian Naira (₦). For custom artisan builds, we require full payment or a 70% deposit before production commences. Final balance must be settled before delivery."
    },
    {
      title: "Shipping & Delivery",
      icon: <Truck className="text-amber-700" />,
      content: "We deliver across Nigeria. Delivery timelines vary based on the complexity of the frame. Standard collection frames typically ship within 3-5 business days, while custom artisan frames may take 7-14 business days."
    },
    {
      title: "Returns & Refunds",
      icon: <RefreshCw className="text-amber-700" />,
      content: "Due to the personalized nature of custom framing, we cannot accept returns on bespoke items unless they arrive damaged. Please inspect your delivery immediately and report any issues with photo evidence within 24 hours."
    }
  ];

  // Rendering the jsx component 
  return (
    <Fragment>
      <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
        <Navbar />

        {/* Header Section */}
        <section className="pt-40 pb-20 bg-stone-100 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-serif font-light mb-6">
              Terms & <span className="italic">Conditions</span>
            </h1>
            <p className="text-stone-500 text-lg">
              Last Updated: February 2024. Please read our guidelines for a smooth artisan experience.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {sections.map((section, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-200">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-serif mb-4 text-stone-800">{section.title}</h2>
                    <p className="text-stone-600 leading-relaxed text-lg">
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Legal Footer Note */}
            <div className="mt-24 p-8 bg-amber-50 rounded-3xl border border-amber-100">
              <h3 className="text-sm font-bold uppercase tracking-widest text-amber-800 mb-2">Need Clarification?</h3>
              <p className="text-stone-600">
                If you have questions regarding a specific custom build or our shipping policies, please contact Amy directly through our official WhatsApp or DM channels before placing your order.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

// Exporting the terms and conditions component 
export default TermsAndConditions;