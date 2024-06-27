// backend/server.js

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_email_password',
    },
});

// Route to handle form submission
app.post('/send-email', (req, res) => {
    const {
        firstName,
        lastName,
        email,
        contactNumber,
        selectedServices,
        requirements,
        callFirstName,
        callLastName,
        callContactNumber,
        callDate,
        callTime,
        callMessage,
    } = req.body;

    // Email content
    const mailOptions = {
        from: 'your_email@gmail.com',
        to: 'infotechbellway@gmail.com',
        subject: 'New Form Submission',
        html: `
            <p><strong>Contact Form Data:</strong></p>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact Number:</strong> ${contactNumber}</p>
            <p><strong>Selected Services:</strong> ${selectedServices.join(', ')}</p>
            <p><strong>Requirements:</strong> ${requirements}</p>
            <p><strong>Call Form Data:</strong></p>
            <p><strong>First Name:</strong> ${callFirstName}</p>
            <p><strong>Last Name:</strong> ${callLastName}</p>
            <p><strong>Contact Number:</strong> ${callContactNumber}</p>
            <p><strong>Date:</strong> ${callDate}</p>
            <p><strong>Time:</strong> ${callTime}</p>
            <p><strong>Message:</strong> ${callMessage}</p>
        `,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent');
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
