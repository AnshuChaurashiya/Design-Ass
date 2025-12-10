import React, { useEffect, useRef } from 'react'
import ComaIcons from "../assets/coma.png"
import gsap from "gsap";

const CustomerReviews = () => {
    const sliderRef = useRef();   
 
    const reviews = [
        {
            icons: ComaIcons,
            userName: "K Oiwakw",
            reviewMsf: "Fantastic customer service. I shifted from a traditional bank to Sable [and] Sable’s customer service helped me answer all the questions that I needed to switch."
        },
        {
            icons: ComaIcons,
            userName: "K Oiwakw",
            reviewMsf: "The best bank for immigrants in the US. Thank you Sable! I have nothing but good things to say about you!."
        },
        {
            icons: ComaIcons,
            userName: "K Oiwakw",
            reviewMsf: "Fantastic customer service. I shifted from a traditional bank to Sable [and] Sable’s customer service helped me answer all the questions that I needed to switch."
        },
    ];

    const allReviewCards = [...reviews, ...reviews];

    useEffect(() => {
        const slider = sliderRef.current;
        gsap.to(slider, {
            x: "-50%",      
            duration: 10,    
            ease: "linear",
            repeat: -1,    
        });
    }, []);

    return (
        <div className="w-full py-20 bg-black text-white flex flex-col items-center">

            <h1 className="text-7xl ml-32 font-bold mb-10">4.8</h1>

            <div className="w-full overflow-hidden">
                <div
                    ref={sliderRef}
                    className="flex gap-10 w-full">
                    {allReviewCards.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#1A1A1A] shrink-0 md:w-[40%] p-10 w-full md:p-5 lg:p-10 flex gap-10  rounded-2xl">
                            <img src={item.icons} alt="coma" className="w-10 h-10 md:w-5 md:h-5 opacity-80 " />
                            <div className="flex flex-col justify-between ">
                                <p className="text-gray-300 md:mb-4 mb-10 text-base md:text-2xl">{item.reviewMsf}</p>
                                <h3 className="font-semibold text-lg">——— {item.userName}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default CustomerReviews;
