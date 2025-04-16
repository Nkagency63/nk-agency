
import React, { useState, useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesOverview from "../components/home/ServicesOverview";
import FeaturedProjects from "../components/home/FeaturedProjects";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CTASection from "../components/home/CTASection";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col">
      <HeroSection isVisible={isVisible} />
      <ServicesOverview />
      <FeaturedProjects />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
};

export default Home;
