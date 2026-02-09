// Importing the necessary modules 
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


// Creating the app component 
class App extends Component {
  // Rendering the component 
  render() {
    // Returning the jsx component 
    return(
      <Fragment> 
        <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About /> } /> 
            <Route path="/services" element={<Services /> } /> 
            <Route path="/contact" element={<Contact /> } /> 
            <Route path="/login" element={<Login /> } /> 
            <Route path="/register" element={<Register /> } /> 
            <Route path="*" element={<ErrorPage /> } /> 
          </Routes>
        </BrowserRouter>
      </Fragment>
    )
  }
}

// Exporting the component
export default App; 