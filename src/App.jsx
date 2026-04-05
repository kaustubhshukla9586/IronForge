import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import WhyIronForge from './components/WhyIronForge'
import Trainers from './components/Trainers'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ backgroundColor: '#0D0D0D', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Programs />
      <WhyIronForge />
      <Trainers />
      <Pricing />
      <Testimonials />
      <BookingForm />
      <Footer />
    </div>
  )
}

export default App