// Importing the necessary modules 
import chalk from 'chalk'; 
import express from 'express'
import cors from 'cors'; 
import morgan from 'morgan';
import dotenv from 'dotenv'; 
import mongodb from 'mongoose'; 
import 'module-alias/register.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import accessLogStream from './logs/logger.js';
import corsOptions from './corsConfig/corsConfig.js';

// Importing the routes
import home from "#routes/homeRoutes.js"; 

// Loading the env variables 
dotenv.config(); 

// Setting the database uri 
const databaseUri = process.env.MONGODB_URI || "mongodb://localhost:27017/theframegallery"; 

// Connecting to the database 
mongodb.connect(databaseUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(chalk.green('Connected to MongoDB successfully'));
}).catch((error) => {
    console.error(chalk.red('Error connecting to MongoDB:'), error);
});

// Initializing the express application
const app = express();

// Setting some necessary middleware 
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined', { stream: accessLogStream, immediate: true }));

// Setting the host 
const HOST = process.env.HOST || "0.0.0.0"; 
const PORT = process.env.PORT || 3001;

// Setting up the routes
app.use('/', home);

// Starting the server
app.listen(PORT, HOST, () => {
    console.log(chalk.red(`Server is running at http://${HOST}:${PORT}`));
});