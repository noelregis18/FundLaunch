
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CampaignCard, { CampaignCardProps } from "./CampaignCard";
import { Link } from "react-router-dom";

// Mock data for featured campaigns
const mockFeaturedCampaigns: CampaignCardProps[] = [
  {
    id: "eco-friendly-water-bottle",
    title: "Eco-Friendly Reusable Water Bottle",
    category: "Technology",
    imageSrc: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=800&auto=format&fit=crop",
    description: "A revolutionary water bottle made from biodegradable materials with temperature control.",
    raised: 12500,
    goal: 25000,
    daysLeft: 15,
  },
  {
    id: "community-garden",
    title: "Urban Community Garden Project",
    category: "Community",
    imageSrc: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=800&auto=format&fit=crop",
    description: "Creating green spaces in urban neighborhoods to provide fresh produce and community gathering areas.",
    raised: 5600,
    goal: 10000,
    daysLeft: 20,
  },
  {
    id: "indie-documentary",
    title: "Independence: The Documentary",
    category: "Arts & Culture",
    imageSrc: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=800&auto=format&fit=crop",
    description: "A compelling documentary exploring the stories of individuals who have overcome significant obstacles.",
    raised: 32000,
    goal: 50000,
    daysLeft: 12,
  },
  {
    id: "educational-app",
    title: "Interactive Learning Platform for Kids",
    category: "Education",
    imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    description: "An educational app that makes learning fun through interactive games and activities for children aged 5-12.",
    raised: 15800,
    goal: 20000,
    daysLeft: 5,
  },
  {
    id: "mental-health-platform",
    title: "Mental Wellness Support Platform",
    category: "Health",
    imageSrc: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=800&auto=format&fit=crop",
    description: "A digital platform providing resources, support groups, and professional guidance for mental health.",
    raised: 18000,
    goal: 30000,
    daysLeft: 25,
  },
  {
    id: "sustainable-fashion",
    title: "Sustainable Fashion Collection",
    category: "Fashion",
    imageSrc: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800&auto=format&fit=crop",
    description: "A clothing line made from recycled materials and sustainable production methods.",
    raised: 22000,
    goal: 40000,
    daysLeft: 18,
  },
];

const FeaturedCampaigns = () => {
  const [category, setCategory] = useState<string>("all");

  const filteredCampaigns = category === "all" 
    ? mockFeaturedCampaigns 
    : mockFeaturedCampaigns.filter(campaign => campaign.category.toLowerCase() === category.toLowerCase());

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold">Featured Campaigns</h2>
            <p className="text-gray-600 mt-2">Discover innovative projects and inspiring causes</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/campaigns">View All Campaigns</Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-6">
          <Button 
            variant={category === "all" ? "default" : "outline"} 
            size="sm"
            onClick={() => setCategory("all")}
            className={category === "all" ? "bg-primary" : ""}
          >
            All
          </Button>
          <Button 
            variant={category === "technology" ? "default" : "outline"} 
            size="sm"
            onClick={() => setCategory("technology")}
            className={category === "technology" ? "bg-primary" : ""}
          >
            Technology
          </Button>
          <Button 
            variant={category === "arts & culture" ? "default" : "outline"} 
            size="sm"
            onClick={() => setCategory("arts & culture")}
            className={category === "arts & culture" ? "bg-primary" : ""}
          >
            Arts & Culture
          </Button>
          <Button 
            variant={category === "community" ? "default" : "outline"} 
            size="sm"
            onClick={() => setCategory("community")}
            className={category === "community" ? "bg-primary" : ""}
          >
            Community
          </Button>
          <Button 
            variant={category === "education" ? "default" : "outline"} 
            size="sm"
            onClick={() => setCategory("education")}
            className={category === "education" ? "bg-primary" : ""}
          >
            Education
          </Button>
          <Button 
            variant={category === "health" ? "default" : "outline"} 
            size="sm"
            onClick={() => setCategory("health")}
            className={category === "health" ? "bg-primary" : ""}
          >
            Health
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} {...campaign} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
