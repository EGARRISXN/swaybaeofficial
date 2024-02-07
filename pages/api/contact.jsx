import nodemailer from 'nodemailer'
import {userEmail, userPass} from '@/utils/env'

export default async function ContactAPI(req, res) {
  const {name, email, subject, message} = req.body

  const User = userEmail || process.env.EMAIL_USER
  const Pass = userPass || process.env.EMAIL_PASS

  const data = {
    name,
    email,
    subject,
    message,
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: User,
      pass: Pass,
    },
  })

  try {
    const mail = await transporter.sendMail({
      from: User,
      to: 'sway.bae9000@gmail.com',
      replyTo: email,
      subject: `${name}: ${subject}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        `,
    })

    console.log('Message sent:', mail.messageId)

    return res.status(200).json({message: 'Success!'})
  } catch (error) {
    console.log('Error sending message:', error)
    return res.status(500).json({message: 'Could not send email.'})
  }
}
