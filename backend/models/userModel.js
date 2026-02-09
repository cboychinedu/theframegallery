// Importing the necessary modules 
import mongodb from "mongoose";

// Defining the User schema 
const userSchema = new mongodb.Schema({
    fullname: { type: String, required: true }, 
    email: { type: String, required: true }, 
    password: { type: String, required: true }, 
    date: { type: Date, default: Date.now }
}, { timestamps: true }); 

// Creating the user model 
const User = mongodb.model('User', userSchema); 

// Exporting the user model 
export default User; 