import Navbar from './components/Navbar.jsx'
import Navbar2 from './components/Navbar2.jsx'
import Hero from './components/Hero.jsx'
import LogoLoop from './components/LogoLoop.jsx'

import Services from './components/Services.jsx'
import WorkingSmarter from './components/WorkingSmarter.jsx'
import LatestProjects from './components/LatestProjects.jsx'
import CustomerStories from './components/CustomerStories.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'




const App = () => {
  return (
    <div className='bg-[#060010] min-h-screen'>
      {/* <Navbar /> */}
      <Navbar2 />
      <Hero />
      <LogoLoop />
      <Services />
      <LatestProjects />
      <WorkingSmarter />
      <CustomerStories />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />





    </div>
  )
}

export default App