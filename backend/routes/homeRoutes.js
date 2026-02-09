/**
 * Author: Mbonu Chinedum 
 * Date Created: 9/02/2026
 * Date Modified: 9/02/2026 
 */

// Importing the necessary modules 
import jwt from 'jsonwebtoken'; 
import bcrypt from 'bcrypt'; 
import { Router } from 'express';
import User from '#models/userModel.js';
import apiLimiter from '#rateLimiter/rateLimiter.js';

// Initialize the router object 
const router = Router(); 

// Creating the register route 
router.post('/register', async (req, res) => {
    // Getting the user details from the request body
    const userDetails = req.body; 

    // Using try catch block to handle the errors 
    try {
        // Getting the user email 
        const email = userDetails.email; 
        const password = userDetails.password; 

        // Checking if the user already exists on the database, by using the 
        // email 
        const existingUser = await User.findOne({ email: email }); 

        // if the user already exists, return an error message 
        if (existingUser) {
            // Creating an error message 
            const errorMessage = JSON.stringify({
                message: "User already registered!", 
                status: "error", 
                statusCode: 409
            }); 

            // Sending the error response 
            return res.send(errorMessage); 
        }

        // else if the user does not exist, create a new user and hash the password 
        else {
            // hash the password 
            const saltRounds = await bcrypt.genSalt(10); 
            const hashedPassword = await bcrypt.hash(password, saltRounds); 

            // Saving the the new user to the database 
            const registeredUser = new User({
                fullname: userDetails.fullname.trim(), 
                email: userDetails.email.trim(), 
                password: hashedPassword
            }); 

            // Saving the user to the database 
            const result = await registeredUser.save(); 

            // Sending the success response 
            const successMessage = JSON.stringify({
                message: "User registered successfully!", 
                status: "success", 
                statusCode: 201, 
                userId: result._id
            }); 

            // Sending the success response 
            return res.send(successMessage); 
        }
    }

    // Catching the errors that occur during the request 
    catch (error) {
        // Logging the error 
        console.log("Error: ", error); 

        // Creating the error message 
        const errorMessage = JSON.stringify({
            message: "Internal server error", 
            status: "error", 
            statusCode: 500
        }); 

        // Sending the error response 
        return res.send(errorMessage); 
    }
});

// Creating the route for login users 
router.post('/login', apiLimiter, async (req, res) => {
    // Getting the login details from the request body 
    const { email, password } = req.body; 

    // Using try catch block to check if the user exists on the database 
    try {
        // Finding the user by email 
        const user = await User.findOne({ email: email }); 

        // if the user exists, check the password 
        if (user) {
            // Comparing the password 
            const isMatch = await bcrypt.compare(password, user.password); 

            // if the passwords match, create a JWT token 
            if (isMatch) {
                // Creating the payload for the token 
                const payload = {
                    userId: user._id, 
                    email: user.email, 
                    isLoggedIn: true
                }; 

                // Signing the token 
                const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '24h'}); 

                // Creating a success response message 
                const successMessage = JSON.stringify({
                    message: "User login successful!", 
                    status: "success", 
                    statusCode: 200, 
                    token: token 
                }); 

                // Sending the success response 
                return res.send(successMessage); 
            }

            // Else if the passwords do not match, return an error response 
            else {
                // Creating the error message 
                const errorMessage = JSON.stringify({
                    message: "Invalid email or password!", 
                    status: "error", 
                    statusCode: 401
                }); 

                // Sending the error response 
                return res.send(errorMessage); 
            }
        }

        // Else if the user does not exist, execute the block of code below 
        else {
            // Creating the error message 
            const errorMessage = JSON.stringify({
                message: "Invalid email or password!", 
                status: "error", 
                statusCode: 401
            }); 

            // Sending the error response 
            return res.send(errorMessage); 
        }
    }

    // Catch the error 
    catch (error) {
        // Log the error 
        console.log("Error: ", error); 

        // Creating the error response message 
        const errorMessage = JSON.stringify({
            message: "Internal server error!", 
            status: "error", 
            statusCode: 500, 
        }); 

        // Sending the error response 
        return res.send(errorMessage); 
        
    }
})

// Exporting the home router 
export default router; 