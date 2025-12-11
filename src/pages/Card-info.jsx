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
            style: "md:items-start md:text-start text-left"

        },

        {
            icon: pin,
            heading: "Build your U.S. credit",
            p: "We believe in forming positive habits. Build your U.S. credit with Sable",
            style: "md:items-end md:text-end text-left"
        },

        {
            icon: trophy,
            heading: "The only premium card for building credit.",
            p: "2% unlimited cash back on your favorite brands, 2X first year cash back match, premium benefits and more!",
            style: "md:items-start md:text-start text-left"
        },


        {
            icon: global,
            heading: "Bank like a global citizen with Sable.",
            p: "Start building credit before you even enter the country. Non-U.S. citizens can apply with their passport and visa.",
            style: "md:items-end md:text-end text-left"
        },


    ]


    return (
        <>
            <div className=' w-full   h-auto overflow-hidden relative  bg-[#1C1C1E]  z-30 '>
                <div className="w-full h-full   flex justify-between">
                    <img className='w-full z-30 md:absolute top-[10%]' src={mobileImage} alt="" />
                </div>

                <div className=" text-center  w-full md:absolute top-[10%] md:top-[3%] left-0 z-10 ">
                    <h1 className=' text-[#6FDBD4] md:mb-4'>400,000 ACCOUNTS & COUNTING</h1>
                    <p className=' md:text-4xl text-[2vh] font-bold md:mb-2 '>No hidden fees. No credit checks.</p>
                    <p className=' z-0  md:text-4xl text-[2vh]'> No more barriers to building credit.</p>

                </div>
                

                <div className="text text-center w-full    left-12 mt-[20%] md:top-[35%]  md:mb-60  z-10 ">


                    <div className="  grid md:grid-cols-2 grid-cols-1 w-ful justify-items-center-safe lg:gap-x-[40%] lg:gap-y-[40%] md:gap-y-[20%] gap-10">
                        {
                            CardFeatures.map((item, index) => (
                                <div key={index} className={   ` w-full md:w-[64%]  p-2 flex md:flex-col gap-2  ${item.style} `} >
                                    <img className={` md:w-[13%] md:h-auto   w-12 h-12 ${item.style} `} src={item.icon} alt="" />
                                    <div className={` text-xl mb-2 `}>
                                    <h2 className={`font-semibold   mb-2`}>{item.heading}</h2>
                                    <p className={`text-xs text-[#A0A1A8]` }>{item.p}</p>
                                    </div>
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
