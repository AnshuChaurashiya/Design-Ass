import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Yahoo from "../../assets/yahoo.png";
import Firb from "../../assets/firb.png";
import Bloomberg from "../../assets/bloomberg.png";
import Business from "../../assets/business.png";


const Testimonial = () => {
    gsap.registerPlugin(ScrollTrigger);
    const rowRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            rowRef.current,
            { x: 0, },
            { x: -200,
                scrollTrigger: {
                    trigger: rowRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
                ease: "none",
            }
        );
    }, []);

    return (
        <div className="w-full bg-black py-10 overflow-hidden">
            <div
                ref={rowRef}
                className="flex items-center gap-10 px-10"
            >
                <img src={Yahoo} className="h-12 w-fit ml-10" alt="Yahoo" />
                <img src={Firb} className="h-12 w-fit ml-10" alt="Firb" />
                <img src={Bloomberg} className="h-12 w-fit ml-10" alt="Bloomberg" />
                <img src={Business} className="h-12 w-fit ml-10" alt="Business" />
                <img src={Yahoo} className="h-12 w-fit ml-10" alt="Yahoo" />
                <img src={Firb} className="h-12 w-fit ml-10" alt="Firb" />
                <img src={Bloomberg} className="h-12 w-fit ml-10" alt="Bloomberg" />




            </div>
        </div>
    );
};

export default Testimonial;
