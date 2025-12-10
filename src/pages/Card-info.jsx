import React from 'react'
import mobileImage from "../assets/mobile.png"
import card from '../assets/cardIcon.png'
import pin from '../assets/pin.png'
import trophy from '../assets/trophy.png'
import global from '../assets/global.png'

const CardInfo = () => {

    const CardFeatures = [
        {
            icon: card,
            heading: "Get a secured credit card and bank account in 5 minutes.",
            p: "No credit history, credit check, or minimum deposit required.",
            style: "items-start text-start"

        },

        {
            icon: pin,
            heading: "Build your U.S. credit",
            p: "We believe in forming positive habits. Build your U.S. credit with Sable",
            style: "items-end text-end"
        },

        {
            icon: trophy,
            heading: "The only premium card for building credit.",
            p: "2% unlimited cash back on your favorite brands, 2X first year cash back match, premium benefits and more!",
            style: "items-start text-start"
        },


        {
            icon: global,
            heading: "Bank like a global citizen with Sable.",
            p: "Start building credit before you even enter the country. Non-U.S. citizens can apply with their passport and visa.",
            style: "items-end text-end"
        },


    ]


    return (
        <>
            <div className=' w-full h-screen md:h-auto pb-20 md:pb-40 bg-[#1C1C1E] relative z-30 '>
                <img className='rotate-z-[10deg]  z-10  relative ' src={mobileImage} alt="" />

                <div className="text text-center w-full absolute mt-0   md:top-5  lg:top-20">
                    <h1 className='text-center text-[#6FDBD4] md:mb-4'>400,000 ACCOUNTS & COUNTING</h1>
                    <p className=' md:text-4xl text-[2vh] font-bold md:mb-2 '>No hidden fees. No credit checks.</p>
                    <p className=' z-0  md:text-4xl text-[2vh'> No more barriers to building credit.</p>


                    <div className=" grid grid-cols-1 md:grid-cols-2 md:mt-5 lg:mt-20 justify-items-center gap-4 p-4 md:gap-[30%]">
                        {
                            CardFeatures.map((item, index) => (
                                <div key={index} className={`md:w-56 border-t border-gray-600 md:border-none flex flex-col ${item.style}`}>
                                    <img className={`md:w-[15%]  `} src={item.icon} alt="" />
                                    <h2 className={`mb-1  ${item.style} text-xl`}>{item.heading}</h2>
                                    <p className={`text-xs text-[#A0A1A8] ${item.style}`}>{item.p}</p>
                                </div>

                            ))
                        }

                    </div>
                </div>



            </div>
        </>
    )
}

export default CardInfo
