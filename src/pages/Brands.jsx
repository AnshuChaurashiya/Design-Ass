import React from 'react'
import Food from '../assets/foods.png'
import Netflix from '../assets/netflix.png'
import Song from '../assets/song.png'
import Uber from '../assets/uber.png'
import Amzone from '../assets/amzone.png'
import Uber2 from '../assets/uber2.png'


const Brands = () => {
  const leftData = [
    {
      heading: "Earn 2% cash back on favorite brands",
      subHeading: "Earn 2%1 cash back on favorite brands, 1%1 cashback on all purchases, and a 2x cashback match in your first year! Get premium benefits and much more."
    },


    {
      heading: "Moving to the U.S.? No SSN required",
      subHeading: "Start building credit before you even enter the country. Sign up with your international address, passport & visa instead**."
    },
    {
      heading: "Get help from a real person",
      subHeading: "When you’ve got questions about your finances, get multilingual customer support anytime you need from direct in-app chat, email, phone, and our site FAQs."
    },

  ]


  // img
  const rightData = [Food, Netflix, Song, Uber, Amzone, Uber2];




  return (
    <>
      <div className=" flex w-full flex-wrap">
        {/* content */}
        <div className="md:w-[50%]  flex flex-col items-start justify-around bg-[#1c1c1f] p-5">
          {
            leftData.map((item, index) => (
              <div key={index} className=" lg:px-20  md:m-2 border-t border-gray-800 " >
                <h2 className=' md:text-3xl text-xl mt-6 md:mt-0 w-96 mb-2 md:w-full  '>{item.heading}</h2>
                <p className=' text-base text-gray-300'>{item.subHeading}</p>
              </div>
            ))
          }
        </div>


        {/* img */}
        <div className="md:w-[50%] md:p-4 grid grid-cols-2 gap-10 p-2 justify-items-center bg-gray-200">
           {rightData.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`brand-${index}`}
              className="md:w-[215px]  bg-white md:h-[215px]  w-96 h-32 object-contain md:p-10 p-5 rounded-2xl"
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Brands
