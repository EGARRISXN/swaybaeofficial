import './globals.css'
import StudioNavbar from '@/app/components/StudioNavbar'

export default function StudioLayout({children}) {
  return (
    <html lang='en' className='scroll-smooth antialiased'>
      <body className='min-h-screen'>
        <StudioNavbar />
        {children}
      </body>
    </html>
  )
}
