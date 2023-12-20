import nodemailer from "nodemailer";
import Customer from "./db/models/customer";
import bcrypt from "bcrypt";

//function to send email to user for verification or reset password
//for now this is limited in test phase but when we host it we can use it for real
export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    //hashing the user id for security purpose and update the user in the database
    const hashedToken = await bcrypt.hashSync(userId, 10);

    //updating the user in the database with the hashed token and token expiry time for verification
    if (emailType === "VERIFY") {
      await Customer.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    }

    //updating the user in the database with the hashed token and token expiry time for reset password
    if (emailType === "RESET") {
      await Customer.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    //creating transporter for sending email using nodemailer
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_SERVER_HOST,
      port: process.env.MAIL_SERVER_PORT,
      auth: {
        user: process.env.MAIL_SERVER_USER,
        pass: process.env.MAIL_SERVER_PASSWORD,
      },
    });

    //mail options for sending email to user for verification or reset password
    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href="${process.env.NEXT_PUBLIC_HOST_API}/${emailType === "VERIFY" ? "auth/verify" : "auth/reset"
        }?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "Verify your email" : "Reset your password"
        } or copy and paste the link below in your browser.<br>
      ${process.env.NEXT_PUBLIC_HOST_API}/${emailType === "VERIFY" ? "auth/verify" : "auth/reset"
        }?token=${hashedToken}
       </p>`,
    };

    //sending email to user
    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};