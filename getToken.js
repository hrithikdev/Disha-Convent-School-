const { google } = require('googleapis');
const readline = require('readline');
const fs = require('fs');


require('dotenv').config();
// Replace these with your actual credentials from Google Cloud Console
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URIS;

// Create OAuth2 client
const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// Function to get access token
function getAccessToken() {
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline', // Ensures we get a refresh token
        scope: ['https://www.googleapis.com/auth/gmail.send'], // Scope for sending emails
    });

    console.log('🔗 Open this URL in your browser and authorize the app:\n', authUrl);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('\n🔑 Enter the authorization code from the browser: ', (code) => {
        rl.close();
        oauth2Client.getToken(code, (err, token) => {
            if (err) {
                console.error('❌ Error retrieving access token', err);
                return;
            }

            console.log('✅ Access token received:\n', token);

            // Save the token for future use
            fs.writeFileSync('tokens.json', JSON.stringify(token, null, 2));
            console.log('💾 Tokens saved to tokens.json');
        });
    });
}

// Run the function
getAccessToken();


// const { google } = require('googleapis');
// require('dotenv').config();

// const oAuth2Client = new google.auth.OAuth2(
//   CLIENT_ID,
//   CLIENT_SECRET,
//   REDIRECT_URI
// );

// oAuth2Client.setCredentials({
//   refresh_token: REFRESH_TOKEN,
// });

// async function sendMail() {
//   const accessToken = await oAuth2Client.getAccessToken();

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       type: 'OAuth2',
//       user: 'your-email@gmail.com',
//       clientId: CLIENT_ID,
//       clientSecret: CLIENT_SECRET,
//       refreshToken: REFRESH_TOKEN,
//       accessToken: accessToken.token,
//     },
//   });

//   const mailOptions = {
//     from: 'your-email@gmail.com',
//     to: 'recipient@example.com',
//     subject: 'Test Email',
//     text: 'This is a test email using OAuth2.',
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return console.log('Error sending email:', error);
//     }
//     console.log('Email sent:', info.response);
//   });
// }

// sendMail().catch(console.error);

