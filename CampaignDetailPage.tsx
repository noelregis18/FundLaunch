
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CampaignDetail from "@/components/CampaignDetail";

const CampaignDetailPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-10">
        <CampaignDetail />
      </main>
      <Footer />
    </div>
  );
};

export default CampaignDetailPage;
