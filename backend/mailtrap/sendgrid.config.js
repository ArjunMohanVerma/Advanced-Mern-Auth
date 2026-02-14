// import sgMail from "@sendgrid/mail";
// import dotenv from "dotenv";

// dotenv.config();

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// export const sendVerificationEmail = async (to, token, name) => {
//   const msg = {
//     to,
//     from: process.env.FROM_EMAIL, // must be verified in SendGrid
//     subject: "Verify your email",
//     html: `
//       <h2>Email Verification</h2>
//       <p>Hello ${name},</p>
//       <p>Your verification code is:</p>
//       <h1 style="letter-spacing: 5px;">${token}</h1>
//       <p>This code expires in 24 hours.</p>
//     `,
//   };

//   await sgMail.send(msg);
// };
