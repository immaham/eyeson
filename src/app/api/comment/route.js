import connectToDatabase from "../../lib/mangodb";
import Comment from "../../models/Comment";
import nodemailer from "nodemailer";

export async function POST(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, number, message } = await req.json();

    if (!firstName || !lastName || !email || !number || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    try {
      // Connect to MongoDB

      await connectToDatabase();

      // Save the comment to MongoDB
      const comment = new Comment({
        firstName,
        lastName,
        email,
        number,
        message,
      });
      await comment.save();

      // Send email notification to your mailbox
      const transporter = nodemailer.createTransport({
        service: "gmail", // Or another email service
        auth: {
          user: process.env.EMAIL_USER, // Your email address
          pass: process.env.EMAIL_PASS, // Your email password
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL, // Your recipient email address
        subject: "New Comment Received",
        text: `You have a new comment on your site:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}\n`,
      };

      await transporter.sendMail(mailOptions);

      return new Response(
        JSON.stringify({ message: "Form sent successfully!" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: "Something went wrong!" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  } else {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", Allow: "POST" }, // Optionally specify allowed methods
    });
  }
}
