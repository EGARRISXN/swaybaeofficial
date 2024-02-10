import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Socials from '@/app/components/Socials'
import Inquiries from '@/app/components/Inquiries'

export default function Home() {
  return (
    <main className='flex flex-col px-1'>
      <h1 className='hidden'>Main Page</h1>
      <Hero />
      <hr className='container mx-auto border-2 border-purple-800/50' />
      <About />
      <hr className='container mx-auto border-2 border-purple-800/50' />
      <Socials />
      <hr className='container mx-auto border-2 border-purple-800/50' />
      <Inquiries />
      <hr className='container mx-auto border-2 border-purple-800/50' />
    </main>
  )
}
