
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedCampaigns from "@/components/FeaturedCampaigns";
import HowItWorks from "@/components/HowItWorks";
import SuccessStories from "@/components/SuccessStories";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedCampaigns />
        <HowItWorks />
        <SuccessStories />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
