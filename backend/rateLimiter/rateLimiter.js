// Importing the necessary modules 
import rateLimit from "express-rate-limit";

// Creating a limiter 
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes 
    max: 10,  // 10 trials/requests 
    handler: (req, res, next) => {
    // Returning the error message
    return res.status(429).json({
            status: "blocked",
            message: "Session blocked due to too many requests, please try again later after 15mins", 
            statusCode: 429, 
        })
    }, 
    standardHeaders: true, 
    legacyHeaders: false, 
}); 

// Exporting the rate limter 
export default apiLimiter; 