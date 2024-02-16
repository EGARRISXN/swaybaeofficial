import nodemailer from 'nodemailer'
import {emailUser, emailPass} from '@/utils/env.js'

export default async function ContactAPI(req, res) {
  const {name, email, subject, message} = req.body

  const User = emailUser
  const Pass = emailPass

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: User,
      pass: Pass,
    },
  })

  const data = {
    name,
    email,
    subject,
    message,
  }
  console.log(data)

  try {
    const mail = await transporter.sendMail({
      from: name,
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
