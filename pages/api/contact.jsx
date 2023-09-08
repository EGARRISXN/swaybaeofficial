import nodemailer from "nodemailer"

export default async function ContactAPI(req, res) {
  const { name, email, subject, message } = req.body

  const user = process.env.NEXT_PUBLIC_EMAIL_USER

  const data = {
    name,
    email,
    subject,
    message,
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, //upgrade later with STARTTLS
    auth: {
      user: user,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    }
  })

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "sway.bae9000@gmail.com",
      replyTo: email,
      subject: `${name}: ${subject}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        `,
    })

    console.log("Message sent:", mail.messageId)

    return res.status(200).json({ message: "Success!" })
  } catch (error) {
    console.log("Error sending message:", error);
    return res.status(500).json({ message: "Could not send email." })
  }
}
