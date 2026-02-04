import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar2 from './components/Navbar2.jsx'
import Footer from './components/Footer.jsx'
import Work from './pages/Work.jsx'
import ServicePage from './pages/ServicePage.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Pricing from './pages/Pricing.jsx'
import Courses from './pages/Courses.jsx'
import HelioExpect from './pages/casestudies/HelioExpect.jsx'
import Plannora from './pages/casestudies/Plannora.jsx'
import RainforestAi from './pages/casestudies/RainforestAi.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'


const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className='bg-[#060010] min-h-screen'>
        <Navbar2 />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/work/HelioExpect" element={<HelioExpect />} />
          <Route path="/work/Plannora" element={<Plannora />} />
          <Route path="/work/RainforestAi" element={<RainforestAi />} />

        </Routes>


        <Footer />
      </div>

    </BrowserRouter>
  )
}

export default App