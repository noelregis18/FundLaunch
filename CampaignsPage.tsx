
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CampaignCard, { CampaignCardProps } from "@/components/CampaignCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, Filter } from "lucide-react";

// Mock data for campaigns
const mockCampaigns: CampaignCardProps[] = [
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
  {
    id: "renewable-energy",
    title: "Portable Solar Power Generator",
    category: "Technology",
    imageSrc: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop",
    description: "A lightweight, portable solar generator that can power your devices anywhere.",
    raised: 45000,
    goal: 60000,
    daysLeft: 7,
  },
  {
    id: "board-game",
    title: "Strategic Adventure Board Game",
    category: "Games",
    imageSrc: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=800&auto=format&fit=crop",
    description: "An immersive board game with unique mechanics and beautiful artwork.",
    raised: 28000,
    goal: 35000,
    daysLeft: 10,
  },
  {
    id: "music-album",
    title: "Debut Album: Echoes of Tomorrow",
    category: "Music",
    imageSrc: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop",
    description: "An independent artist's first full-length album, blending electronic and acoustic elements.",
    raised: 8000,
    goal: 12000,
    daysLeft: 30,
  }
];

const categories = [
  "All Categories", 
  "Technology", 
  "Community", 
  "Arts & Culture", 
  "Education", 
  "Health",
  "Fashion",
  "Games",
  "Music"
];

const CampaignsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("trending");
  const [progressRange, setProgressRange] = useState([0]);
  const [daysLeftRange, setDaysLeftRange] = useState([30]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter campaigns based on search, category, and other filters
  const filteredCampaigns = mockCampaigns.filter(campaign => {
    // Search filter
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          campaign.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filter
    const matchesCategory = selectedCategory === "All Categories" || 
                            campaign.category === selectedCategory;
    
    // Progress filter (percentage funded)
    const progress = Math.round((campaign.raised / campaign.goal) * 100);
    const matchesProgress = progress >= progressRange[0];
    
    // Days left filter
    const matchesDaysLeft = campaign.daysLeft <= daysLeftRange[0];
    
    return matchesSearch && matchesCategory && matchesProgress && matchesDaysLeft;
  });
  
  // Sort campaigns
  const sortedCampaigns = [...filteredCampaigns].sort((a, b) => {
    if (sortBy === "newest") {
      return a.daysLeft - b.daysLeft; // Assuming newer campaigns have more days left
    } else if (sortBy === "mostFunded") {
      return b.raised - a.raised;
    } else if (sortBy === "endingSoon") {
      return a.daysLeft - b.daysLeft;
    } else {
      // trending - based on percentage funded and recency
      const progressA = (a.raised / a.goal) * (1 + (1 / a.daysLeft));
      const progressB = (b.raised / b.goal) * (1 + (1 / b.daysLeft));
      return progressB - progressA;
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Explore Campaigns</h1>
            <p className="text-gray-600">Discover innovative projects and inspiring causes from creators around the world</p>
          </div>
          
          {/* Search and filter bar */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search campaigns..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-3">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="trending">Trending</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="mostFunded">Most Funded</SelectItem>
                      <SelectItem value="endingSoon">Ending Soon</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>
            
            {/* Advanced filters */}
            {showFilters && (
              <div className="mt-4 pt-4 border-t grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Progress: {progressRange[0]}%
                  </label>
                  <Slider
                    defaultValue={[0]}
                    max={100}
                    step={5}
                    value={progressRange}
                    onValueChange={setProgressRange}
                    className="mb-6"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Maximum Days Left: {daysLeftRange[0]} days
                  </label>
                  <Slider
                    defaultValue={[30]}
                    max={60}
                    step={1}
                    value={daysLeftRange}
                    onValueChange={setDaysLeftRange}
                  />
                </div>
              </div>
            )}
          </div>
          
          {/* Results count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{sortedCampaigns.length}</span> campaigns
            </p>
          </div>
          
          {/* Campaign grid */}
          {sortedCampaigns.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedCampaigns.map((campaign) => (
                <CampaignCard key={campaign.id} {...campaign} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold mb-2">No campaigns found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CampaignsPage;
