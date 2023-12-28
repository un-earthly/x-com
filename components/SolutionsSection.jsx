import { Button } from 'flowbite-react'
import React from 'react'

export default function SolutionsSection() {
  return (
    <div className='flex flex-col relative items-center justify-center bg-gradient-to-b from-[#8000ff] via-[#bf95e9] to-[#e4cbfc] overflow-hidden h-screen w-11/12 mx-auto rounded-3xl my-10'>

      <div className='lg:mb-64'>
        <h1 className='md:text-3xl text-xl text-center text-white'>From Chaos to Control -<br />  Simplify your Shipments</h1>
        <p className='w-3/5 text-center text-sm mx-auto text-white my-3'>You want to maintain a clear overview, keep everything running efficiently and more importantly focus on what really matters in your business.
          <button className="text-[#8000ff] bg-white text-base flex items-center justify-center mx-auto px-3 py-3 my-5 w-48 rounded-full ">Get Started</button>
        </p>
      </div>

      <div className='absolute -bottom-3 md:-bottom-10'>
        <img className='scale-125 md:scale-100' src="https://u-sendfulfillment.com/wp-content/uploads/2023/09/grabee-modules-hero-lg-1-1536x384.png" alt="" />
      </div>

    </div>
  )
}
