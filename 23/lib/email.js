const nodemailer = require('nodemailer');

/**
 * Send an email using Nodemailer
 * @param {Object} data - The email data
 * @param {string} data.name - Sender's name
 * @param {string} data.email - Sender's email
 * @param {string} data.message - Email message
 * @returns {Promise<Object>} - The email sending result
 */
async function sendEmail(data) {
  const { name, email, message } = data;

  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Email content
  const mailOptions = {
    from: `"ThinkBigg Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.DEFAULT_FROM || process.env.EMAIL_USER, // Use DEFAULT_FROM if available, otherwise use EMAIL_USER
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
    html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <h3 style="color: #555;">Message:</h3>
  <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
    <p style="white-space: pre-wrap;">${message}</p>
  </div>
</div>
    `
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

module.exports = {
  sendEmail
}; 