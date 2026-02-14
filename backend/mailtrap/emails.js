import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/* ===============================
   VERIFY EMAIL
================================= */
export const sendVerificationEmail = async (email, verificationToken) => {
  const msg = {
    to: email,
    from: process.env.FROM_EMAIL,
    subject: "Verify your email",
    html: VERIFICATION_EMAIL_TEMPLATE.replace(
      "{verificationCode}",
      verificationToken
    ),
  };

  try {
    const response = await sgMail.send(msg);
    console.log("Verification email sent:", response[0].statusCode);
  } catch (error) {
    console.error(
      "Error sending verification email:",
      error.response?.body || error.message
    );
    throw new Error("Error sending verification email");
  }
};

/* ===============================
   WELCOME EMAIL
================================= */
export const sendWelcomeEmail = async (email, name) => {
  const msg = {
    to: email,
    from: process.env.FROM_EMAIL,
    subject: "Welcome to Auth Company 🎉",
    html: `
      <h2>Welcome ${name}!</h2>
      <p>We're excited to have you at Auth Company.</p>
      <p>Your account has been successfully verified.</p>
    `,
  };

  try {
    const response = await sgMail.send(msg);
    console.log("Welcome email sent:", response[0].statusCode);
  } catch (error) {
    console.error(
      "Error sending welcome email:",
      error.response?.body || error.message
    );
    throw new Error("Error sending welcome email");
  }
};

/* ===============================
   PASSWORD RESET REQUEST
================================= */
export const sendPasswordResetEmail = async (email, resetURL) => {
  const msg = {
    to: email,
    from: process.env.FROM_EMAIL,
    subject: "Reset your password",
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
  };

  try {
    const response = await sgMail.send(msg);
    console.log("Password reset email sent:", response[0].statusCode);
  } catch (error) {
    console.error(
      "Error sending password reset email:",
      error.response?.body || error.message
    );
    throw new Error("Error sending password reset email");
  }
};

/* ===============================
   PASSWORD RESET SUCCESS
================================= */
export const sendResetSuccessEmail = async (email) => {
  const msg = {
    to: email,
    from: process.env.FROM_EMAIL,
    subject: "Password Reset Successful",
    html: PASSWORD_RESET_SUCCESS_TEMPLATE,
  };

  try {
    const response = await sgMail.send(msg);
    console.log("Password reset success email sent:", response[0].statusCode);
  } catch (error) {
    console.error(
      "Error sending password reset success email:",
      error.response?.body || error.message
    );
    throw new Error("Error sending password reset success email");
  }
};








// import {
// 	PASSWORD_RESET_REQUEST_TEMPLATE,
// 	PASSWORD_RESET_SUCCESS_TEMPLATE,
// 	VERIFICATION_EMAIL_TEMPLATE,
// } from "./emailTemplates.js";




// import { mailtrapClient, sender } from "./mailtrap.config.js";

// export const sendVerificationEmail = async (email, verificationToken) => {
// 	const recipient = [{ email }];

// 	try {
// 		const response = await mailtrapClient.send({
// 			from: sender,
// 			to: recipient,
// 			subject: "Verify your email",
// 			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
// 			category: "Email Verification",
// 		});

// 		console.log("Email sent successfully", response);
// 	} catch (error) {
// 		console.error(`Error sending verification`, error);

// 		throw new Error(`Error sending verification email: ${error}`);
// 	}
// };

// export const sendWelcomeEmail = async (email, name) => {
// 	const recipient = [{ email }];

// 	try {
// 		const response = await mailtrapClient.send({
// 			from: sender,
// 			to: recipient,
// 			template_uuid: "cf664565-0f3c-44e3-90c5-96e72f84935e",
// 			template_variables: {
// 				company_info_name: "Auth Company",
// 				name: name,
// 			},
// 		});

// 		console.log("Welcome email sent successfully", response);
// 	} catch (error) {
// 		console.error(`Error sending welcome email`, error);

// 		throw new Error(`Error sending welcome email: ${error}`);
// 	}
// };

// export const sendPasswordResetEmail = async (email, resetURL) => {
// 	const recipient = [{ email }];

// 	try {
// 		const response = await mailtrapClient.send({
// 			from: sender,
// 			to: recipient,
// 			subject: "Reset your password",
// 			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
// 			category: "Password Reset",
// 		});
// 	} catch (error) {
// 		console.error(`Error sending password reset email`, error);

// 		throw new Error(`Error sending password reset email: ${error}`);
// 	}
// };

// export const sendResetSuccessEmail = async (email) => {
// 	const recipient = [{ email }];

// 	try {
// 		const response = await mailtrapClient.send({
// 			from: sender,
// 			to: recipient,
// 			subject: "Password Reset Successful",
// 			html: PASSWORD_RESET_SUCCESS_TEMPLATE,
// 			category: "Password Reset",
// 		});

// 		console.log("Password reset email sent successfully", response);
// 	} catch (error) {
// 		console.error(`Error sending password reset success email`, error);

// 		throw new Error(`Error sending password reset success email: ${error}`);
// 	}
// };
