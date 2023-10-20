import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
   <>
   <div className="py  bg-white">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image src="/images/web.jpg" width={500} height={200}  alt="" className="max-w-sm rounded-lg shadow-2xl" />
    <div className='md:max-w-sm'>
      <h1 className="text-5xl font-bold ">Masters &  Minds Apps</h1>
      <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, corrupti!.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
   </>
  )
}

export default Hero