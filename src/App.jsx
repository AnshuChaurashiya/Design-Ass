import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Footer from "./components/Footer/Footer";
import Testimonial from "./components/testimonial/Testimonial";
import Brands from "./pages/Brands";
import CardInfo from "./pages/Card-info";
import CardCompare from "./pages/CardCompare";
import { BlackCard } from "./pages/Cards/BlackCard";
import WhiteCard from "./pages/Cards/whiteCard";
import CustomerReviews from "./pages/CustomerReviews";
import HomeContent from "./pages/HomeContent";
import Join from "./pages/Join";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  // useEffect(() => {
  //   // 🔥 Init Lenis
  //   const lenis = new Lenis({
  //     duration: 1.4,
  //     smooth: true,
  //     smoothTouch: true,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //   });

  //   // 🔥 Sync Lenis with GSAP ScrollTrigger
  //   lenis.on("scroll", ScrollTrigger.update);

  //   const raf = (time) => {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   };

  //   requestAnimationFrame(raf);

  //   // Cleanup
  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  return (
    <>
      <div className="max-w-8xl m-auto overflow-hidden">
        <HomeContent />
        <CardInfo />
        <Testimonial />
        <BlackCard />
        <WhiteCard />
        <Brands />
        <CardCompare />
        <CustomerReviews />
        <Join />
        <Footer />
      </div>
    </>
  );
};

export default App;
