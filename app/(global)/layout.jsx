import './app.css'
import TopProgressBar from '@/components/(ui)/TopProgressBar'
import ScrollToTop from '@/components/(ui)/ScrollToTop'
import Navbar from '@/components/(other)/Navbar'
import Footer from '@/components/(other)/Footer'

export default function AppLayout({children}) {
  return (
    <main>
      <TopProgressBar />
      <Navbar />
      {children}
      <ScrollToTop />
      <Footer />
    </main>
  )
}
