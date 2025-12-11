 import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Footer from "./components/Footer/Footer";
import Testimonial from "./components/testimonial/Testimonial";
import Brands from "./pages/Brands";
import CardInfo from "./pages/Card-info";
import CardCompare from "./pages/CardCompare";
 import CustomerReviews from "./pages/CustomerReviews";
import HomeContent from "./pages/HomeContent";
import Join from "./pages/Join";
import { BlackCard } from "./pages/BlackCard";
import WhiteCard from "./pages/whiteCard";

gsap.registerPlugin(ScrollTrigger);

const App = () => {


  return (
    <>
      <div className="max-w-[1500px] m-auto overflow-hidden">
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
