
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Footer from "./components/Footer/Footer";
import Testimonial from "./components/testimonial/Testimonial";
import Brands from "./pages/Brands";
import CardInfo from "./pages/Card-info";
import CardCompare from "./pages/CardCompare";
import { BlackCard } from "./pages/BlackCard";
import WhiteCard from "./pages/whiteCard";
import CustomerReviews from "./pages/CustomerReviews";
import HomeContent from "./pages/HomeContent";
import Join from "./pages/Join";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
 

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
