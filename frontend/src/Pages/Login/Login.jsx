// Importing the necessary modules 
import { Fragment, useState } from 'react';
import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import AlertBox from '../../Components/AlertBox/AlertBox';
import { Mail, Lock, ArrowRight, Instagram } from 'lucide-react';

// Creating the login component 
const Login = () => {
    // State for the alert visibility
    const [showAlert, setShowAlert] = useState(false);
    const [status, setStatus] = useState(null); 
    const [alertMessage, setAlertMessage] = useState(null); 

    // Setting the state for the login fields 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    // Function to handle form submission
    const handleLogin = (event) => {
        // Prevent defualt submission 
        event.preventDefault();
        setAlertMessage("Hello User"); 
        setStatus("error"); 
        setShowAlert(true);
        // Auto-hide alert after 4 seconds
        setTimeout(() => setShowAlert(false), 4000);
    };

    return (
        <Fragment> 
            <div className="min-h-screen bg-stone-50 text-stone-900 font-sans relative overflow-x-hidden">
                {/* Adding the navbar */}
                <Navbar />

                {/* Sliding Alert Component */}
                {showAlert && (
                    <AlertBox status={status} alertMessage={alertMessage} /> 
                )}
           
                <div className="flex min-h-screen pt-20">
                    {/* Left Side: Visual/Branding (Hidden on mobile) */}
                    <div className="hidden lg:flex lg:w-1/2 relative bg-stone-900 overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=1000" 
                            alt="Gallery Interior" 
                            className="absolute inset-0 w-full h-full object-cover opacity-60"
                        />
                        <div className="relative z-10 flex flex-col justify-center px-20">
                            <h2 className="text-5xl font-serif text-white leading-tight mb-6 italic">
                            Welcome back to <br />The Frame Gallery
                            </h2>
                            <p className="text-stone-300 text-lg max-w-md">
                            Sign in to manage your custom orders, view your saved curated collections, and track your nationwide deliveries.
                            </p>
                        </div>
                        {/* Decorative Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
                    </div>

                    {/* Right Side: Login Form */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
                        <div className="max-w-md w-full">
                            <div className="text-center lg:text-left mb-10">
                            <h1 className="text-3xl font-serif mb-2">Login</h1>
                            <p className="text-stone-500">Enter your details to access your account</p>
                            </div>

                            {/* Updated form with handleSubmit */}
                            {/* Email Input */}
                            <div className='space-y-5'> 
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                                    <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
                                        <Mail size={18} />
                                    </div>
                                    <input 
                                        type="email" 
                                        required
                                        className="block w-full pl-11 pr-4 py-4 bg-white border border-stone-200 rounded-2xl focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-all outline-none shadow-sm"
                                        placeholder="name@example.com"
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                    </div>
                                </div>

                                {/* Password Input */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                    <label className="block text-sm font-medium text-stone-700">Password</label>
                                    <a href="#" className="text-xs text-amber-800 hover:underline">Forgot password?</a>
                                    </div>
                                    <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
                                        <Lock size={18} />
                                    </div>
                                    <input 
                                        type="password" 
                                        required
                                        className="block w-full pl-11 pr-4 py-4 bg-white border border-stone-200 rounded-2xl focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-all outline-none shadow-sm"
                                        placeholder="••••••••"
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                    </div>
                                </div>

                                {/* Remember Me */}
                                <div className="flex items-center">
                                    <input 
                                    id="remember-me" 
                                    type="checkbox" 
                                    className="h-4 w-4 text-amber-700 focus:ring-amber-700 border-stone-300 rounded" 
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-stone-600">
                                    Remember me for 30 days
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button 
                                    type="submit" 
                                    onClick={handleLogin}
                                    className="group w-full bg-stone-900 text-white py-4 rounded-2xl font-bold hover:bg-amber-800 transition-all shadow-lg shadow-stone-200 flex items-center justify-center gap-2"
                                >
                                    Login <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* Social/Register Links */}
                            <div className="relative my-8">
                                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-stone-200"></span></div>
                                <div className="relative flex justify-center text-sm"><span className="px-2 bg-stone-50 text-stone-500 uppercase tracking-widest text-[10px]">Or continue with</span></div>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                <button 
                                type="button" 
                                className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-white border border-stone-200 rounded-2xl hover:bg-stone-100 transition-colors font-medium text-sm text-stone-700"
                                >
                                <Instagram size={18} className="text-pink-600" /> Instagram Login
                                </button>
                            </div>

                            <p className="text-center text-sm text-stone-500 mt-8">
                                Don't have an account? <a href="/register" className="text-amber-800 font-bold hover:underline">Register now</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Adding the footer */}
                <Footer /> 
            </div>
        </Fragment>
    );
};

// Exporting the login component 
export default Login;