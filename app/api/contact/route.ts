import { NextRequest, NextResponse } from 'next/server';
const nodemailer = require('nodemailer');

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, message, token } = await req.json(); // Get the reCAPTCHA token from the request

  // Step 3: Verify the reCAPTCHA token with Google
  const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  });

  const recaptchaData = await recaptchaResponse.json();

  if (!recaptchaData.success) {
    // If reCAPTCHA verification fails, return an error
    return NextResponse.json({ message: 'reCAPTCHA verification failed', error: recaptchaData['error-codes'] }, { status: 400 });
  }

  // If reCAPTCHA verification is successful, continue with email sending
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // You can use any email service provider
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New message from ${firstName} ${lastName}`,
    text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}
