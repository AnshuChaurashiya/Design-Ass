import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlackCardImg from "../assets/cardB.png";


export const BlackCard = () => {
    const imgRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    
  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { rotate: 0, opacity: 0, scale: 0.9,},
      { rotate: 34, opacity: 1, scale: 1, duration: 3, ease: "power3.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 40%", 
          end: "top 10%",
          scrub: true, 
          // markers:true
        },
      }
    );
  }, []);

  return (
    <>
      <div className="w-full h-[500px]  overflow-hidden p-12 mt-20 flex justify-end px-10">
        <img
          ref={imgRef}
          className="h-[532px] w-96"
          src={BlackCardImg}
          alt=""
        />
      </div>
    </>
  );
};
