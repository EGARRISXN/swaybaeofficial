'use client'
import {useState} from 'react'
import MyButton from '../(ui)/MyButton'

export default function ContactForm() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  // Update form data state when input fields change
  const handleInputChange = (event) => {
    const {name, value} = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: data,
      })

      if (!response.ok) {
        console.log('Failed to send message')
        throw new Error(`response status: ${response.status}`)
      }

      // Clear form fields on successful message sent
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })

      const responseData = await response.json()
      console.log(responseData['message'])

      alert('Message successfully sent!')
    } catch (err) {
      console.error(err)
      alert('Error, please try again.')
    }
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
          placeholder='Name'
          className='rounded-xl border-2 p-3 text-neutral-900 shadow-lg shadow-purple-800/50 '
          autoComplete='on'
          name='name'
          id='name'
          value={formData.name}
          onChange={handleInputChange}
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
          placeholder='Email'
          className='rounded-xl border-2 p-3 text-neutral-900 shadow-lg shadow-purple-800/50 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200
           disabled:bg-slate-50
          disabled:text-slate-500 disabled:shadow-none'
          autoComplete='on'
          name='email'
          id='email'
          value={formData.email}
          onChange={handleInputChange}
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
          placeholder='Subject'
          className='rounded-xl border-2 p-3 text-neutral-900 shadow-lg shadow-purple-800/50 '
          autoComplete='on'
          name='subject'
          id='subject'
          value={formData.subject}
          onChange={handleInputChange}
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
          placeholder='Message'
          className='w-full rounded-xl border-2 p-3 text-neutral-900 shadow-lg shadow-purple-800/50 '
          name='message'
          id='message'
          value={formData.message}
          onChange={handleInputChange}
        />
      </div>
      <hr className='my-6 border-secondary' />
      <div className='my-2 flex justify-center'>
        <MyButton type='submit' value={'Send Message'} />
      </div>
    </form>
  )
}
