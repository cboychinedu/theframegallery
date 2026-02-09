// Importing the necessary modules 
import { Fragment, useState } from 'react';
import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import AlertBox from '../../Components/AlertBox/AlertBox';
import { Mail, Lock, ArrowRight, User, Instagram } from 'lucide-react';

// Creating the register component 
const Register = () => {
    // Initializing the navigate hook 
    const navigate = useNavigate(); 

    // State for the alert visibility and messaging
    const [showAlert, setShowAlert] = useState(false);
    const [status, setStatus] = useState(null); 
    const [alertMessage, setAlertMessage] = useState(null); 

    // Setting the state for the registration fields 
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState("");

    // Function to handle form submission
    const handleRegister = async (event) => {
        // Prevent default submission 
        event.preventDefault();

        // Checking the fullname 
        if (fullname === "") {
            // Showing the alert box 
            setAlertMessage("Fullname is required!"); 
            setStatus("Info"); 
            setShowAlert(true); 

            // Auto-hide alert after 5 seconds
            setTimeout(() => setShowAlert(false), 5000);
            return; 
        }

        // Checking the email 
        else if (email === "" || !email.includes("@")) {
            // Showing the alert box 
            setAlertMessage("Email address is required!"); 
            setStatus("Info"); 
            setShowAlert(true); 

            // Auto hide the alert after 5 seconds 
            setTimeout(() => setShowAlert(false), 5000); 
            return;
        }

        // Checking the password 
        else if (password.trim() === "") {
            // Showing the alert box 
            setAlertMessage("Password is required!"); 
            setStatus("Info"); 
            setShowAlert(true); 

            // Auto hide the alert after 5 seconds 
            setTimeout(() => setShowAlert(false), 5000); 
            return;
        }

        // Checking the confirm password 
        else if (confirmPassword.trim() === "") {
            // Showing the alert box 
            setAlertMessage("Please retype your password to confirm it!"); 
            setStatus("Info"); 
            setShowAlert(true); 

            // Auto hide the alert after 5 seconds 
            setTimeout(() => setShowAlert(false), 5000); 
            return;
        }

        // Checking if the password match 
        else if (password.trim() !== confirmPassword.trim()) {
            // Showing the alert box 
            setAlertMessage("Passwords do not match"); 
            setStatus("Info"); 
            setShowAlert(true); 

            // Auto hide the alert after 5 seconds 
            setTimeout(() => setShowAlert(false), 5000); 
            return;
        }

        // Else if all validations pass, execute this block of code below 
        else {
            // Getting the registration data 
            const registrationData = JSON.stringify({
                fullname: fullname.trim(), 
                email: email.trim(), 
                password: password.trim()
            }); 

            // Setting the backend server url 
            const serverUrl = `${import.meta.env.VITE_SERVER_URL}/register`; 

            // Using try catch block to send the request tot he backend server 
            try {
                // Making the request to the register route 
                const response = await fetch(serverUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' }, 
                    body: registrationData
                }); 

                // if there was no response from the server 
                if (!response.ok) {
                    // Handle the server side error 
                    const errorData = await response.json(); 

                    // Display the error message 
                    setAlertMessage(errorData.message || "Registration failed!"); 
                    setStatus("Error");
                    setShowAlert(true); 

                    // Auto hide the alert after 5 seconds 
                    setTimeout(() => setShowAlert(false), 5000); 
                    return; 
                }

                // Else if the server returned a response, get the response 
                // and save it into the response data variable 
                const responseData = await response.json(); 

                // if the user was registered, execute this block of code 
                if (responseData.status === "success") {
                    // Display the status message 
                    setAlertMessage(responseData.message); 
                    setStatus("Success"); 
                    setShowAlert(true); 

                    // Auto hide, and navigate the user to the login page 
                    setTimeout(() => {
                        // Hide the message 
                        setShowAlert(false); 

                        // Navigate the user to the login page 
                        navigate("/login"); 
                    }, 6000)

                }

                // Else if the response data was an error 
                else {
                    // Display the status message 
                    setAlertMessage(responseData.message); 
                    setStatus("Error"); 
                    setShowAlert(true); 

                    // Auto hide the error after 7 mins 
                    setTimeout(() => setShowAlert(false), 7000); 
                    return; 
                }
            }   

            // Catching the error 
            catch (error) {
                // Log the error to the console 
                console.log("Error: ", error.message); 

                // Display the error message 
                setAlertMessage("Error connecting to the server!"); 
                setStatus("Error"); 
                setShowAlert(true); 

                //Auto hide the error after 7 mins (Error displays should last longer) 
                setTimeout(() => setShowAlert(false), 7000); 
                return; 
            }
        }
    };

    // Rendering the jsx component 
    return (
        <Fragment> 
            <div className="min-h-screen bg-stone-50 text-stone-900 font-sans relative overflow-x-hidden">
                {/* Adding the navbar */}
                <Navbar />

                {/* Sliding Alert Component for feedback */}
                {showAlert && (
                    <AlertBox status={status} alertMessage={alertMessage} /> 
                )}
           
                <div className="flex min-h-screen pt-20">
                    {/* Left Side: Visual/Branding (Consistent with Login) */}
                    <div className="hidden lg:flex lg:w-1/2 relative bg-stone-900 overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=1000" 
                            alt="Ornate Frame Gallery" 
                            className="absolute inset-0 w-full h-full object-cover opacity-60"
                        />
                        <div className="relative z-10 flex flex-col justify-center px-20">
                            <h2 className="text-5xl font-serif text-white leading-tight mb-6 italic">
                            Join the <br />Gallery Community
                            </h2>
                            <p className="text-stone-300 text-lg max-w-md">
                            Create an account to start your custom framing journey, save your favorites, and get exclusive access to new art drops.
                            </p>
                        </div>
                        {/* Decorative Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
                    </div>

                    {/* Right Side: Registration Form */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
                        <div className="max-w-md w-full">
                            <div className="text-center lg:text-left mb-10">
                            <h1 className="text-3xl font-serif mb-2">Create Account</h1>
                            <p className="text-stone-500">Join Amy's world of premium framing</p>
                            </div>

                            {/* Form container */}
                            <div className='space-y-5'> 
                                {/* Full Name Input */}
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-2">Full Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
                                            <User size={18} />
                                        </div>
                                        <input 
                                            type="text" 
                                            required
                                            className="block w-full pl-11 pr-4 py-4 bg-white border border-stone-200 rounded-2xl focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-all outline-none shadow-sm"
                                            placeholder="Amy Johnson"
                                            onChange={(event) => setFullname(event.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
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
                                    <label className="block text-sm font-medium text-stone-700 mb-2">Password</label>
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

                                {/* Confirm Password Input */}
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-2">Confirm Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
                                            <Lock size={18} />
                                        </div>
                                        <input 
                                            type="password" 
                                            required
                                            className="block w-full pl-11 pr-4 py-4 bg-white border border-stone-200 rounded-2xl focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-all outline-none shadow-sm"
                                            placeholder="••••••••"
                                            onChange={(event) => setConfirmPassword(event.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* Terms and Conditions */}
                                <div className="flex items-center">
                                    <input 
                                        id="terms" 
                                        type="checkbox" 
                                        required
                                        className="h-4 w-4 text-amber-700 focus:ring-amber-700 border-stone-300 rounded" 
                                    />
                                    <label htmlFor="terms" className="ml-2 block text-sm text-stone-600">
                                        I agree to the <a href="#" className="text-amber-800 underline">Terms and Conditions</a>
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button 
                                    type="submit" 
                                    onClick={handleRegister}
                                    className="group w-full bg-stone-900 text-white py-4 rounded-2xl font-bold hover:bg-amber-800 transition-all shadow-lg shadow-stone-200 flex items-center justify-center gap-2"
                                >
                                    Register <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="relative my-8">
                                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-stone-200"></span></div>
                                <div className="relative flex justify-center text-sm"><span className="px-2 bg-stone-50 text-stone-500 uppercase tracking-widest text-[10px]">Or register with</span></div>
                            </div>

                            {/* Social Login Option */}
                            <div className="grid grid-cols-1 gap-4">
                                <button 
                                    type="button" 
                                    className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-white border border-stone-200 rounded-2xl hover:bg-stone-100 transition-colors font-medium text-sm text-stone-700"
                                >
                                    <Instagram size={18} className="text-pink-600" /> Instagram Register
                                </button>
                            </div>

                            {/* Link to Login */}
                            <p className="text-center text-sm text-stone-500 mt-8">
                                Already have an account? <a href="/login" className="text-amber-800 font-bold hover:underline">Login here</a>
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

// Exporting the register component 
export default Register;