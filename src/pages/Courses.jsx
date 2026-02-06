import React from 'react'
import NextHero from '../components/NextHero.jsx'
import courseIntroImg from '../assets/images/uxdesigncourse.png'
import CTA from '../components/CTA.jsx'
import LatestProjects from '../components/LatestProjects.jsx'

const curriculum = [
  {
    month: "Month 1",
    title: "Foundations of UX",
    description: "Projects kickoff, personas, user research basics, and understanding the core principles of user-centric design.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    month: "Month 2",
    title: "Research and Analysis",
    description: "Conducting interviews, data synthesis, creating customer journey maps, and defining problem statements.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    month: "Month 3",
    title: "Ideation and Prototyping",
    description: "Moving from low-fidelity wireframes to high-fidelity prototypes using Figma. Building design systems.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    month: "Month 4",
    title: "Testing and Refinement",
    description: "Running usability tests, checking for accessibility (a11y), and iterating designs based on feedback.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    month: "Month 5",
    title: "Portfolio Strategy & Storytelling",
    description: "Selecting your best stories, writing compelling case studies, and structuring your portfolio.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    month: "Month 6",
    title: "Finalization & Launch",
    description: "Polishing visuals, peer reviews, publishing your portfolio, and preparing for interviews.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const TimelineItem = ({ item, index }) => (
  <div className="relative pl-12 md:pl-0 md:group flex-col md:block">
    {/* Center Line Dot */}
    <div className={`absolute left-0.5 md:left-1/2 w-6 h-6 rounded-full border-4 border-[#060010] z-20 transform md:-translate-x-1/2 mt-1.5
            ${index % 6 === 0 ? 'bg-blue-500' :
        index % 6 === 1 ? 'bg-purple-500' :
          index % 6 === 2 ? 'bg-pink-500' :
            index % 6 === 3 ? 'bg-orange-500' :
              index % 6 === 4 ? 'bg-green-500' : 'bg-cyan-500'
      }`}>
    </div>

    {/* Content Card */}
    <div className={`md:w-[45%] mb-12 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}>
      <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-white/20 transition-all duration-300 hover:bg-white/10 group-hover:translate-y-[-5px]">
        <div className="flex items-center gap-3 mb-3 justify-start md:justify-start">
          {/* Icon wrapper - color matched to dot */}
          <div className={`p-2 rounded-lg bg-opacity-20 flex items-center justify-center
                        ${index % 6 === 0 ? 'text-blue-400 bg-blue-500' :
              index % 6 === 1 ? 'text-purple-400 bg-purple-500' :
                index % 6 === 2 ? 'text-pink-400 bg-pink-500' :
                  index % 6 === 3 ? 'text-orange-400 bg-orange-500' :
                    index % 6 === 4 ? 'text-green-400 bg-green-500' : 'text-cyan-400 bg-cyan-500'
            }`}>
            {item.icon}
          </div>
          <span className="text-sm font-bold tracking-wider uppercase text-gray-400">{item.month}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  </div>
);


const Courses = () => {
  return (
    <div className='bg-[#060010] min-h-screen font-sans'>
      <NextHero
        title="Courses"
        subtext="At TagNtarget, we help small startups tackle the world’s biggest challenges with tailored solutions,"
      />

      {/* Course Highlights */}
      {/* <div className="relative z-20 -mt-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4 md:gap-8">
          {[
            "100% job assistance",
            "Avg Salary 8,00,000/year",
            "100+ hours of learning"
          ].map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full shadow-lg hover:border-blue-500/30 transition-all duration-300">
              <span className="text-white font-medium text-sm md:text-base tracking-wide">{feature}</span>
            </div>
          ))}
        </div>
      </div> */}

      {/* Introduction Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left">
            <span className="text-blue-400 font-medium tracking-wider uppercase mb-3 block">The Course</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Designed for Future Leaders</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Our UI/UX Design course is meticulously crafted to take you from a beginner to a job-ready professional.
              We focus on practical, hands-on learning with real-world projects that simulate the industry environment.
            </p>
            <ul className="space-y-3">
              {['100% job assistance', 'Avg Salary 8,00,000/year', '100+ hours of learning'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Content */}
          <div className="relative group">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
              <img
                src={courseIntroImg}
                alt="UI/UX Design Course"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-linear-to-b from-transparent via-blue-500/20 to-transparent hidden md:block"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Course Curriculum</h2>
            <p className="text-gray-400">We follow proven methodology to ensure every project delivers exceptional results</p>
          </div>

          <div className="relative space-y-8 md:space-y-0">
            {/* Mobile connector line */}
            <div className="absolute left-1.5 top-2 bottom-2 w-px bg-white/10 md:hidden"></div>

            {curriculum.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Google Form Section */}
      {/* Google Form Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              We're thrilled to have you join us on this exciting journey.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              Feel free to reach out if you have any questions or need further assistance.
              We're here to help every step of the way. Feel free to reach out if you have any questions or need further assistance.
              We're here to help every step of the way.
            </p>

          </div>

          {/* Right Form Placeholder */}
          {/* Right Form Placeholder */}
          <div className="w-full py-3 bg-white/5 border border-white/10 rounded-2xl overflow-hidden relative backdrop-blur-sm shadow-2xl">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdGhORrGFJ62v_Ua9Yh4nqloJVdmJtqRDbbFIGV1_knLF37IQ/viewform?embedded=true"
              className="w-full h-[1100px] md:h-[1020px] overflow-hidden"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              title="Google Form"
              style={{ overflow: 'hidden' }}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>

      <LatestProjects showHeading={true} showFilter={false} projectCount={3} />

      <CTA />
    </div>
  )
}

export default Courses