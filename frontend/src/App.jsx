// Importing the necessary modules 
import Cookies from 'js-cookie'; 
import { jwtDecode } from 'jwt-decode';
import { Component, Fragment } from 'react'; 
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Importing the pages 
import Home from "./Pages/Home/Home"; 
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Dashboard from './Pages/Dashboard/Dashboard';
import CustomRequestModal from './Pages/CustomFrame/CustomFrame';
import TermsAndConditions from './Pages/TermsAndConditions/TermsAndConditions';


// Creating the app component 
class App extends Component {
  // Rendering the component 
  render() {
    // Getting the user cookie 
    const userCookie = Cookies.get('userToken'); 
    let isLoggedIn; 

    // Checking if the user cookie is present 
    if (userCookie) {
      // Decoding the user cookie 
      let decodedToken = jwtDecode(userCookie); 
      isLoggedIn = decodedToken.isLoggedIn; 

    }

    // If the user token is not present, execute the block 
    // of code below 
    else {
      isLoggedIn = false; 
    }

    // Returning the jsx component 
    return(
      <Fragment> 
        <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About /> } /> 
            <Route path="/services" element={<Services /> } /> 
            <Route path="/contact" element={<Contact /> } /> 
            <Route 
              path="/login" 
              element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <Login /> } 
            /> 
            <Route 
              path="/register" 
              element={isLoggedIn ? <Navigate to="/dashboard" replace />: <Register /> } 
            /> 
            <Route 
              path="/terms"
              element={isLoggedIn ? <Navigate to="/dashboard" replace />: <TermsAndConditions /> }
            /> 
            <Route 
              path="/dashboard" 
              element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace /> } 
            /> 
            <Route 
              path="/dashboard/custom-frame" 
              element={isLoggedIn ? <CustomRequestModal /> : <Navigate to="/login" replace /> } 
            /> 
            <Route path="*" element={<ErrorPage /> } /> 
          </Routes>
        </BrowserRouter>
      </Fragment>
    )
  }
}

// Exporting the component
export default App; 