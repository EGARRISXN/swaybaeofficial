'use client'
import {useState} from 'react'
import MyButton from '../(ui)/MyButton'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      console.log('Message sent successfully')
      setLoading(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } else {
      console.log('Error sending message')
      setLoading(false)
    }
  }

  const resolveAfter2Seconds = new Promise((resolve) => setTimeout(resolve, 2000))
  const handleInputChange = (event) => {
    const {id, value} = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }))
  }

  return (
    <form
      className='rounded-3xl border-4 bg-base-100 p-4 text-base-content shadow-lg shadow-purple-800/50 sm:px-10 lg:px-12 lg:pt-8 xl:px-16 xl:pt-12 2xl:px-20'
      onSubmit={handleSubmit}
    >
      <div className='lobster mb-4 mt-4 text-center text-4xl text-primary md:text-left lg:mt-2 lg:text-6xl xl:mt-0'>
        Contact Me
      </div>

      <hr className='hr-lines my-2 border-secondary' />
      <div className='my-4 flex w-full flex-col'>
        <label className='font-bold' htmlFor='name'>
          Name
        </label>
        <input
          type='text'
          minLength={3}
          maxLength={150}
          required
          value={formData.name}
          onChange={handleInputChange}
          placeholder='Name'
          className='rounded-xl border-2 p-3 text-neutral-900 shadow-lg shadow-purple-800/50 '
          autoComplete='on'
          name='name'
          id='name'
        />
      </div>
      <div className='my-4 flex w-full flex-col'>
        <label className='font-bold' htmlFor='email'>
          Email
        </label>
        <input
          type='email'
          minLength={5}
          maxLength={150}
          required
          value={formData.email}
          onChange={handleInputChange}
          placeholder='Email'
          className='rounded-xl border-2 p-3 text-neutral-900 shadow-lg shadow-purple-800/50 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200
           disabled:bg-slate-50
          disabled:text-slate-500 disabled:shadow-none'
          autoComplete='on'
          name='email'
          id='email'
        />
      </div>
      <div className='my-4 flex w-full flex-col'>
        <label className='font-bold' htmlFor='subject'>
          Subject
        </label>
        <input
          type='text'
          minLength={3}
          maxLength={150}
          required
          value={formData.subject}
          onChange={handleInputChange}
          placeholder='Subject'
          className='rounded-xl border-2 p-3 text-neutral-900 shadow-lg shadow-purple-800/50 '
          autoComplete='on'
          name='subject'
          id='subject'
        />
      </div>
      <div>
        <label className='font-bold ' htmlFor='message'>
          Message
        </label>
        <textarea
          type='text'
          rows={3}
          required
          minLength={10}
          maxLength={500}
          value={formData.message}
          onChange={handleInputChange}
          placeholder='Message'
          className='w-full rounded-xl border-2 p-3 text-neutral-900 shadow-lg shadow-purple-800/50 '
          name='message'
          id='message'
        />
      </div>
      <hr className='my-6 border-secondary' />
      <div className='my-2 flex justify-center'>
        <MyButton type='submit' disabled={loading} value={'Send Message'} />
      </div>
    </form>
  )
}
