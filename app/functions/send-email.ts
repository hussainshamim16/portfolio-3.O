// import React from 'react';
// import { Resend } from 'resend';
// import ContactFormEmail from '../components/contact-form-email';
// import toast from 'react-hot-toast';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export const sendEmail = async (formData: FormData) => {
//   const message = formData.get('message') as string;
//   const email = formData.get('email') as string;
//   const subject = formData.get('subject') as string;

//   if (message.length > 5000) {
//     return { error: 'Message is too long' };
//   }

//   try {
//     const data = await resend.emails.send({
//       from: `Contact Form <onboarding@resend.dev>`,
//       to: 'hussainshamimdev@gmail.com',  // اپنے ای میل ایڈریس کو یہاں شامل کریں
//       subject: 'Portfolio Message',
//       replyTo: email,
//       html: `<div>
//                <h3>Subject: ${subject}</h3>
//                <p>${message}</p>
//                <p>From: ${email}</p>
//              </div>`,  // HTML کی شکل میں پیغام
//     });

//     return { data };
//   } catch (e) {
//     console.error(e); // اصل ایرر کی جانچ
//     return { error: 'Failed to send email' };
//   }
// };
