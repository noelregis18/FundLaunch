
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CampaignForm from "@/components/CampaignForm";

const StartCampaignPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Start Your Campaign</h1>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Ready to bring your idea to life? Fill out the form below to create your crowdfunding campaign and start gathering support from backers around the world.
          </p>
          <CampaignForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StartCampaignPage;
