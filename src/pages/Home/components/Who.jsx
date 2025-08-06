import React from 'react'
import side from '../../../assets/side.webp'

const Who = () => {
    return (
        <div className='flex flex-col md:flex-row py-10 md:py-16 sm:w-11/12 lg:w-9/12 mx-auto'>
            <div className='md:w-1/2 p-5 md:p-10 relative'>
                <div className='absolute h-15 w-15 bg-red-400 -z-10 bottom-2 left-1'></div>
                <img src={side} alt="Office-Meeting" className='h-full w-full object-cover' data-aos="zoom-in" data-aos-duration="2000" />

            </div>
            <div className='mt-5 md:w-1/2 flex flex-col justify-center p-5 md:p-10'>
                <h1 className='text-2xl md:text-3xl uppercase font-bold text-white'>Who <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">we are</span></h1>
                <p className='text-white mt-4 md:mt-10 text-justify'>At STYL, we specialize in branding, video production, social media management, ads management, and website development to help businesses build a strong digital presence. Our creative approach ensures that your brand stands out, engages the right audience, and drives real growth.</p>
            </div>
        </div>
    )
}

export default Who
