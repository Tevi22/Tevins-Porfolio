// Import necessary modules
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config({ path: './email.env' }); // Load environment variables

// Create an Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to handle CORS
app.use(cors());

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.mail.me.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

// Define the POST route for '/send-email'
app.post('/send-email', (req, res) => {
    // Extract email data from request body
    const { name, email, subject, message } = req.body;

    // Construct email message
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Error sending email');
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});