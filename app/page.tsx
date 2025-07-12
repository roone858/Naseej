import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="font-sans text-dark bg-light">
      <Header />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
} 