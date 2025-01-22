const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

// const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const app = express();

require('dotenv').config();
app.use(cors({ origin: 'http://127.0.0.1:5500' }));
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());



const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URIS;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// Configure Nodemailer
// const transporter = nodemailer.createTransport({
//   service: 'Gmail', // or another email provider
//   auth: {
//     user: 'hrithikpandey165@gmail.com', // Replace with your email
//     pass: 'Hrithk.dev@12@34', // Use an app password or a secure method
//   },
// });


// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     type: 'OAuth2',
//     clientId: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     refreshToken: process.env.REFRESH_TOKEN,
//   },
// });


// Endpoint to handle email sending
app.post('/send-email', async (req, res) => {
  const { name, email} = req.body;
  // console.log(name);
  // const mailOptions = {
  //   from: 'hrithikpandey165@gmail.com',
  //   to: 'hrithikpandey.dev@gmail.com', // Replace with the recipient's email
  //   subject: 'New Form Submission',
  //   text: `You have a new message from ${name} (${email})`,
  // };

  try{
    const accessToken = await oAuth2Client.getAccessToken();


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'hrithikpandey165@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: ACCESS_TOKEN,
      },
    });

    const mailOptions = {
      from: 'hrithikpandey165@gmail.com',
      to: 'hrithikpandey.dev@gmail.com',
      subject: 'Test Email',
      text: `This is a test email using environment variables in Node.js FROM ${name}, ${email}`,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent:', result);
    res.status(200).json({message: "success"});
  } catch(err){
    console.error('Error sending email:', err);
  }

});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
