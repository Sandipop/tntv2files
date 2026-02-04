import React from 'react'

const NextHero = ({ title, subtext }) => {
    return (
        <div className='w-full h-[70vh] flex flex-col justify-center items-center relative overflow-hidden'>
            {/* Background Text - Faded/Gradient */}
            <h1 className='text-[21vw] font-bold leading-none select-none
            bg-gradient-to-b from-transparent to-white/15 bg-clip-text text-transparent
            absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-[50%]
            pointer-events-none z-0'>
                {title}
            </h1>

            <div className='relative top-[20%] z-10 text-center px-4 max-w-4xl mx-auto mt-4'>

                <p className='text-gray-300 text-lg md:text-xl lg:text-2xl font-light leading-relaxed tracking-wide'>
                    {subtext}
                </p>
            </div>
        </div>
    )
}

export default NextHero
