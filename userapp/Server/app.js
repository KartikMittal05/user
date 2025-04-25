const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors");
const userroutes = require("./Routes/userRoutes");
const dbConnect = require('./config/db');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3002', 'https://your-frontend-url.onrender.com'],
    credentials: true
}));
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// Routes
app.use("/", userroutes);

// Connect to database
dbConnect();

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});