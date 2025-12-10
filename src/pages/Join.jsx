import React from 'react'
import BackgroundImg from '../assets/public.jpg'
import Google from '../assets/google.png'
import Apple from '../assets/apple.png'


const Join = () => {
  return (
    <>
    <div className="w-full p-5 flex relative flex-col md:flex-row justify-end mb-20 ">
        <img 
        className='md:mr-6 rounded-bl-2xl mb-5'
        src={BackgroundImg} alt="" />

        <div className="md:absolute  w-full bottom-10 flex justify-between flex-col md:flex-row items-center md:px-4 lg:px-20">
            <div className="left-content ">
            <p className=' text-4xl text-center md:text-start   mb-4'>Join over <span className=' md:text-6xl'> 400,000</span> accounts</p>
            <p className=' text-xl md:w-[70%]'>Download Sable: effortless, borderless banking for a more connected world.</p>

            </div>
            <div className="right-content flex  md:flex-wrap mt-5 gap-5">
                <img className='md:w-32  ' src={Google} alt="" />
                <img className='md:w-32 '  src={Apple} alt="" />
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Join
