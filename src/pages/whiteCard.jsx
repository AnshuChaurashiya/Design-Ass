import React, { useEffect, useRef } from 'react'
import WhiteCardImg from "../assets/cardA.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhiteCard = () => {
    const cardRef = useRef();
    const textRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 70%",
                end: "top 20%",
                scrub: 1,
                // markers: true,
            }
        });

        // Image animation
        tl.fromTo(
            cardRef.current,
            { rotate: 0, opacity: 0, scale: 0.9 },
            { rotate: -30, opacity: 1, scale: 1, ease: "power3.out" },
             "<" 
        );

        // Text animation
        tl.fromTo(
            textRef.current,
            { opacity: 0, x: 80 },
            { opacity: 1, x: 0, ease: "power3.out" },
            "<" 
        );

    }, []);

    return (
        <>
            <div className="w-full  overflow-hidden flex justify-center flex-wrap-reverse p-10 md:p-0 gap-32 items-center bg-white text-black">

                <img
                    ref={cardRef}
                    className='md:h-[533px] md:w-[433px] md:mt-20 h-[300px]'
                    src={WhiteCardImg}
                    alt=""
                />

                <div ref={textRef} className="content">
                    <p className='text-4xl'>Get a bank account &</p>
                    <p className='text-4xl'>
                        debit card <span className='text-[#1FC6BB]'>in five minutes.</span>
                    </p>
                </div>

            </div>
        </>
    );
};

export default WhiteCard;
