// Importing the necessary modules 
import { Fragment, useState } from 'react'; 
import { Menu, X } from 'lucide-react';
import { jwtDecode } from 'jwt-decode'; 
import Cookies from 'js-cookie';

// Setting the navigation 
const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Services', href: '/services' }, 
];

// Creating the navbar component 
const Navbar = () => {
    // Setting the state 
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    // Getting the user cookie 
    const userCookie = Cookies.get('userToken');
    let isLoggedIn = false; 

    // Logic to check authentication status
    if (userCookie) {
        try {
            const decodedToken = jwtDecode(userCookie); 
            isLoggedIn = decodedToken.isLoggedIn;
        } catch (error) {
            console.error("Invalid token", error);
            isLoggedIn = false;
        }
    }

    // Function to handle logout
    const handleLogout = () => {
        Cookies.remove("userToken"); 
        // Small delay for UX before redirecting
        setTimeout(() => {
            window.location.href = "/login";  
        }, 1000); 
    }

    return(
        <Fragment> 
            {/* Navigation */}
            <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <a className="flex-shrink-0 flex items-center" href="/">
                        <span className="text-[23px] font-serif font-bold tracking-tighter text-stone-800">
                            THE FRAME <span className="text-amber-700">GALLERY</span>
                        </span>
                    </a>
                    
                    {/* Desktop Navigation Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-medium hover:text-amber-700 transition-colors">
                                {item.name}
                            </a>
                        ))}

                        {/* Conditional Auth Links - Desktop */}
                        <div className="flex items-center space-x-4 border-l pl-8 border-stone-200">
                            {isLoggedIn ? (
                                <>
                                    <a href="/dashboard" className="text-sm font-medium hover:text-amber-700 transition-colors">Dashboard</a>
                                    <button 
                                        onClick={handleLogout}
                                        className="bg-amber-700 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-amber-800 transition-all shadow-lg"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button className="text-sm font-medium hover:text-amber-700 transition-colors" onClick={() => window.location.href = '/login'}>Login</button>
                                    <button onClick={() => window.location.href="/register"} className="bg-stone-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-all shadow-lg shadow-stone-200">
                                        Register
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    </div>
                </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-stone-200 px-4 py-6 space-y-4 shadow-xl">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="block text-lg font-medium">{item.name}</a>
                    ))}
                    
                    {/* Conditional Auth Links - Mobile */}
                    <div className="flex flex-col space-y-3 pt-4 border-t border-stone-100">
                        {isLoggedIn ? (
                            <>
                                <a href="/dashboard" className="text-lg font-medium">Dashboard</a>
                                <button 
                                    className="bg-amber-700 text-white px-5 py-3 rounded-xl text-center font-medium" 
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="text-left font-medium text-lg" onClick={() => window.location.href = '/login'}>Login</button>
                                <button className="bg-stone-900 text-white px-5 py-3 rounded-xl text-center font-medium" onClick={() => window.location.href="/register"}>Register</button>
                            </>
                        )}
                    </div>
                </div>
                )}
            </nav>
        </Fragment>
    )
}

// Exporting the navbar 
export default Navbar;