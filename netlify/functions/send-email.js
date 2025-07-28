// netlify/functions/send-email.js

import { Resend } from 'resend';

// Initialize Resend with your API key from environment variables
// Netlify will automatically expose environment variables as process.env.YOUR_VAR_NAME
const resend = new Resend(process.env.RESEND_API_KEY);

// Main handler for the Netlify Function
// Netlify Functions typically expect a handler function that takes event and context
exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  // Parse the request body (Netlify Functions automatically parse JSON if Content-Type is application/json)
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid JSON body.' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  const { name, email, message } = body;

  // Basic server-side validation
  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Name, email, and message are required.' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Use an email from your VERIFIED CUSTOM DOMAIN
      to: ['eogunneye@gmail.com'], // This is where you want to RECEIVE the messages
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      reply_to: email, // Allows you to reply directly to the sender
    });

    console.log('Resend email sent:', data); // Log for Netlify function logs

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!', data: data }),
      headers: { 'Content-Type': 'application/json' },
    };

  } catch (error) {
    console.error('Error sending email with Resend:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email.', error: error.message }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
};