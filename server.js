const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors({ origin: 'http://127.0.0.1:5500' }));
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail', // or another email provider
  auth: {
    user: 'hrithikpandey.dev@gmail.com', // Replace with your email
    pass: 'Hrithk.dev@12@34', // Use an app password or a secure method
  },
});

// Endpoint to handle email sending
app.post('/send-email', (req, res) => {
  const { name, email} = req.body;

  const mailOptions = {
    from: 'hrithikpandey.dev@gmail.com',
    to: 'hrithikpandey165@gmail.com', // Replace with the recipient's email
    subject: 'New Form Submission',
    text: `You have a new message from ${name} (${email})`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: 'Failed to send email.' });
    }
    res.status(200).json({ message: 'Email sent successfully!' });
  });
// res.status(200).json({ message: 'Email sent successfully!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
