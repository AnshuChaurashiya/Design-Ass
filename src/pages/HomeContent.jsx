import React from 'react'
import TopCard from "../assets/Carda.png"
import BottomCard from "../assets/Cardb.png"
import FDIO from "../assets/FDIO.png"
import Navbar from '../components/Header/Navbar'


const HomeContent = () => {
    return (
        <>
            <div className=" w-full  overflow-hidden z-0">

                <img
                    className=" md:w-[205] w-[240px] hidden sm:block absolute left-[30%] rotate-[20deg] -rotate-z-[80deg] -top-[12%] overflow-hidden lg:-top-[25%] md:-top-[27%]"
                    src={TopCard} alt="" />


                <div className="w-full mt-[8%] ">
                    <Navbar />
                </div>

                {/* home text */}

                <div className=" w-fit m-auto mt-10">

                    <h2 className=' text-2xl md:text-6xl  mt-2 '>The fastest, most</h2>
                    <h2 className='text-2xl md:text-6xl  mt-2 '>premium path to</h2>
                    <h2 className='text-2xl md:text-6xl  mt-2  font-semibold'>financial freedom</h2>

                </div>
                <div className="flex justify-center mt-8">
                    <button className=' uppercase bg-[#6FDBD4] text-black px-12 font-semibold w-fit m-auto py-6 rounded-full'>Explore</button>

                </div>

                <div className="">
                    {/* left-content */}
                    <div className=" mt-[15%] mb-5 ml-[5%] flex items-center w-[350px] gap-2">
                        <img src={FDIO} alt="" />
                        <p className='text-[10px] text-[#96969a]'>Banking services provided by Coastal Community Bank, Member FDIC, pursuant to license by Mastercard International Inc.</p>
                    </div>

                    <img
                        className="md:w-[20%] hidden sm:block w-[150px] absolute right-[10%] rotate-[20deg] -rotate-z-[80deg] bottom-[20%] md:-bottom-[22%] lg:-bottom-96"
                        src={BottomCard} alt="" />

                </div>
            </div>

        </>
    )
}

export default HomeContent
