import Image from 'next/image'
import React from 'react'
import Vector from '../../public/vector.png'
const ServicesPage = () => {
  return (
    <div className='w-full h-auto md:py-20 py-10 flex justify-center items-center relative'>
        <div className="object absolute top-20 right-0 w-full h-full">
                <Image src={Vector} width={100} height={100} />
        </div>
      
    </div>
  )
}

export default ServicesPage
