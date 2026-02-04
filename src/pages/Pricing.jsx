import React from 'react'
import NextHero from '../components/NextHero.jsx'
import Lanyard from '../components/Lanyard.jsx'
import BookingCard from '../components/Pricing/BookingCard.jsx'
import PricingPlans from '../components/Pricing/PricingPlans.jsx'
import FAQ from '../components/FAQ.jsx'
import CTA from '../components/CTA.jsx'

const Pricing = () => {
  return (
    <div>

      <NextHero
        title="Pricing"
        subtext="Our pricing is transparent, just like our process."
      />

      <div className="pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10">
          {/* Left Column */}
          <div className="flex flex-col gap-10 sm:gap-8 lg:col-span-5">
            <h2 className="text-4xl sm:text-2xl lg:text-[3.5rem] leading-none font-semibold  text-[#E0E0E0]">
              Our pricing is <span className="text-[#8080806e]">transparent</span>, just like our process.
            </h2>

            <BookingCard />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <PricingPlans />
          </div>
        </div>
      </div>

      <FAQ />
      <CTA />


    </div>
  )
}

export default Pricing