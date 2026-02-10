// Importing the necessary modules 
import { useState, Fragment } from 'react';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { 
  MessageSquare, 
  Settings, 
  Layers, 
  Sparkles, 
  Plus, 
  Clock
} from 'lucide-react';

const Dashboard = () => {
  // Creating the navigation 
  const navigate = useNavigate(); 
  
  // State for the project management
  const [projects] = useState([
    {
      id: "FG-8821",
      name: "Family Portrait",
      status: "Awaiting Confirmation",
      lastUpdate: "2 hours ago",
      currentSelections: "Matte Board, Glass, Minimalist Wood"
    },
    {
      id: "FG-8804",
      name: "Office Abstract",
      status: "In Construction",
      lastUpdate: "Yesterday",
      currentSelections: "Canvas Print, No Glass, Ornate Gold"
    }
  ]);

  return (
    <Fragment>
      <div className="min-h-screen bg-stone-50 text-stone-900 font-sans relative">
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h1 className="text-4xl font-serif mb-2">My Creative Studio</h1>
              <p className="text-stone-500 italic">Where your memories take their final form.</p>
            </div>
            
            {/* UPDATED: Button now opens the modal */}
            <button 
              onClick={() => navigate('/dashboard/custom-frame')}
              className="bg-stone-900 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-800 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
            >
              <Plus size={20} /> New Custom Request
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project Management Section */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Clock className="text-amber-700" size={20} /> Active Projects
              </h2>
              
              {projects.map((project) => (
                <div key={project.id} className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-amber-700">{project.id}</span>
                      <h3 className="text-2xl font-serif">{project.name}</h3>
                    </div>
                    <span className="px-4 py-1.5 bg-amber-50 text-amber-800 rounded-full text-sm font-medium border border-amber-100">
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-stone-50 p-4 rounded-2xl flex items-center gap-3">
                      <Layers className="text-stone-400" size={20} />
                      <p className="text-sm text-stone-600">{project.currentSelections}</p>
                    </div>
                    <div className="bg-stone-50 p-4 rounded-2xl flex items-center gap-3">
                      <Clock className="text-stone-400" size={20} />
                      <p className="text-sm text-stone-600">Updated {project.lastUpdate}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-800 py-3 rounded-xl font-bold transition-colors">
                      View Details
                    </button>
                    <button className="flex-1 bg-stone-900 text-white py-3 rounded-xl font-bold hover:bg-amber-800 transition-colors flex items-center justify-center gap-2">
                      Message Amy <MessageSquare size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Framing Options Side Panel */}
            <div className="space-y-8">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Settings className="text-amber-700" size={20} /> Framing Guide
              </h2>
              
              <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 shadow-2xl space-y-6">
                <p className="text-amber-500 font-serif italic text-lg">"The frame design, the glass, the mat board—it's all your choice."</p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group cursor-help">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Sparkles size={18} />
                    </div>
                    <span className="font-medium">Crystals & Ornate</span>
                  </div>
                  <div className="flex items-center gap-4 group cursor-help">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Layers size={18} />
                    </div>
                    <span className="font-medium">Mat Boards & Solar</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 text-center">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-amber-700 py-3 rounded-xl font-bold hover:bg-amber-600 transition-colors"
                  >
                    Start Custom Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Dashboard;