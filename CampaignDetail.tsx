
import { useState } from "react";
import { useParams } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  Heart, 
  Share2, 
  Users, 
  Bookmark, 
  Tag,
  AlertCircle,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CampaignCardProps } from "./CampaignCard";

// Mock data for campaign details using our existing campaign data structure
const mockCampaigns: Record<string, CampaignCardProps & {
  creatorName: string;
  creatorImage: string;
  creatorBio: string;
  fullDescription: string;
  updates: Array<{id: string; date: string; title: string; content: string}>;
  faqs: Array<{id: string; question: string; answer: string}>;
  rewards: Array<{
    id: string;
    title: string;
    amount: number;
    description: string;
    items: string[];
    backers: number;
    delivery: string;
  }>;
}> = {
  "eco-friendly-water-bottle": {
    id: "eco-friendly-water-bottle",
    title: "Eco-Friendly Reusable Water Bottle",
    category: "Technology",
    imageSrc: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "A revolutionary water bottle made from biodegradable materials with temperature control.",
    raised: 12500,
    goal: 25000,
    daysLeft: 15,
    creatorName: "EcoCraft Innovations",
    creatorImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    creatorBio: "We're a team of environmental engineers and designers dedicated to creating sustainable products that reduce plastic waste.",
    fullDescription: `
      <p>Our eco-friendly water bottle is designed with both the planet and the user in mind. Made from 100% biodegradable materials, this bottle breaks down naturally within 5 years if discarded, compared to the 450+ years it takes for plastic bottles.</p>
      
      <p>But sustainability doesn't mean compromising on features. Our bottle includes:</p>
      
      <ul>
        <li>Advanced temperature control to keep your beverages hot for 12 hours or cold for 24 hours</li>
        <li>Sleek, ergonomic design for comfortable handling</li>
        <li>Leakproof lid with easy one-handed operation</li>
        <li>Built-in filtration system to improve water taste</li>
        <li>Capacity of 750ml - perfect for daily hydration</li>
      </ul>
      
      <p>With every bottle sold, we donate 5% of proceeds to ocean cleanup initiatives around the world. Join us in our mission to reduce plastic waste and create a more sustainable future!</p>
    `,
    updates: [
      {
        id: "update-1",
        date: "2023-10-15",
        title: "Production Milestone Reached!",
        content: "We're excited to announce that we've finalized our manufacturing partnership and the first prototype bottles are coming off the production line. Initial testing shows excellent temperature retention, and we've made some improvements to the lid design based on early feedback."
      },
      {
        id: "update-2",
        date: "2023-09-25",
        title: "Material Testing Complete",
        content: "After rigorous testing of various biodegradable materials, we've selected our final composition. The chosen material passed all durability tests while maintaining its eco-friendly properties. We'll be sharing photos of the material samples in our next update!"
      }
    ],
    faqs: [
      {
        id: "faq-1",
        question: "Is the bottle truly 100% biodegradable?",
        answer: "Yes! Every component of our bottle is made from plant-based materials that will naturally decompose within 5 years in proper composting conditions."
      },
      {
        id: "faq-2",
        question: "How does the temperature control work?",
        answer: "Our bottle uses a double-wall vacuum insulation system combined with a special thermal lining made from natural fibers. This creates an effective barrier against heat transfer, keeping hot drinks hot and cold drinks cold."
      },
      {
        id: "faq-3",
        question: "When will bottles ship?",
        answer: "We plan to begin shipping bottles to backers within 3 months after our campaign ends, with all orders fulfilled within 6 months."
      }
    ],
    rewards: [
      {
        id: "reward-1",
        title: "Early Bird Special",
        amount: 35,
        description: "Be one of the first to receive our eco-friendly water bottle at a special price.",
        items: ["1 Eco-Friendly Water Bottle", "Digital Certificate of Environmental Impact"],
        backers: 120,
        delivery: "March 2024"
      },
      {
        id: "reward-2",
        title: "Double Impact Pack",
        amount: 65,
        description: "Get two bottles and double your environmental impact.",
        items: ["2 Eco-Friendly Water Bottles", "Digital Certificate of Environmental Impact", "Limited Edition Tote Bag"],
        backers: 85,
        delivery: "March 2024"
      },
      {
        id: "reward-3",
        title: "Family & Friends Pack",
        amount: 120,
        description: "Perfect for families or sharing with friends.",
        items: ["4 Eco-Friendly Water Bottles", "Digital Certificate of Environmental Impact", "Limited Edition Tote Bag", "Set of 4 Bottle Sleeves"],
        backers: 42,
        delivery: "April 2024"
      }
    ]
  },
  "community-garden": {
    id: "community-garden",
    title: "Urban Community Garden Project",
    category: "Community",
    imageSrc: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Creating green spaces in urban neighborhoods to provide fresh produce and community gathering areas.",
    raised: 5600,
    goal: 10000,
    daysLeft: 20,
    creatorName: "Urban Greening Coalition",
    creatorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    creatorBio: "A community organization dedicated to transforming unused urban spaces into productive gardens that serve local neighborhoods.",
    fullDescription: `
      <p>Our Urban Community Garden Project aims to transform an abandoned 0.5-acre lot in the heart of downtown into a vibrant community garden that will serve as both a source of fresh produce and a gathering space for local residents.</p>
      
      <p>The garden will feature:</p>
      
      <ul>
        <li>20 raised garden beds for growing vegetables, herbs, and flowers</li>
        <li>A composting station to recycle organic waste</li>
        <li>Rainwater collection system for sustainable irrigation</li>
        <li>Community gathering area with benches and tables</li>
        <li>Educational signage about urban agriculture and sustainable practices</li>
        <li>Tool sharing shed for community use</li>
      </ul>
      
      <p>Studies show that community gardens improve neighborhood food security, foster social connections, and improve air quality. We've secured permission to use the land from the city, and your contributions will help us build the infrastructure needed to make this garden thrive.</p>
      
      <p>Once completed, the garden will be maintained by community volunteers, and produce will be shared among participating families, with excess donated to local food banks.</p>
    `,
    updates: [
      {
        id: "update-1",
        date: "2023-10-10",
        title: "Site Preparation Underway!",
        content: "Great news! We've begun clearing the site and removing debris. Initial soil tests show good growing potential with minimal contamination. We'll need to add some compost and nutrients, but things are looking promising!"
      }
    ],
    faqs: [
      {
        id: "faq-1",
        question: "Who can participate in the community garden?",
        answer: "The garden will be open to all residents of the surrounding neighborhoods. We'll have a simple registration process to assign garden beds and coordinate volunteer activities."
      },
      {
        id: "faq-2",
        question: "What will be grown in the garden?",
        answer: "We're planning to grow a variety of vegetables, herbs, and flowers, with a focus on products that do well in our local climate and meet community needs. Participants will have input on what's grown in their assigned beds."
      },
      {
        id: "faq-3",
        question: "How will the garden be maintained long-term?",
        answer: "We've established a volunteer committee that will oversee garden operations. We're also working with the city parks department to provide basic water access. Ongoing supply costs will be covered by a small annual participant fee and community fundraisers."
      }
    ],
    rewards: [
      {
        id: "reward-1",
        title: "Garden Friend",
        amount: 25,
        description: "Support our garden and receive acknowledgment on our donor board.",
        items: ["Name on Donors Board", "Digital Thank You Certificate"],
        backers: 78,
        delivery: "January 2024"
      },
      {
        id: "reward-2",
        title: "Garden Supporter",
        amount: 50,
        description: "Help us grow and receive garden merchandise.",
        items: ["Name on Donors Board", "Digital Thank You Certificate", "Organic Cotton Tote Bag", "Packet of Heirloom Seeds"],
        backers: 45,
        delivery: "January 2024"
      },
      {
        id: "reward-3",
        title: "Garden Sustainer",
        amount: 100,
        description: "Make a significant impact on our project.",
        items: ["Name on Donors Board", "Digital Thank You Certificate", "Organic Cotton Tote Bag", "Set of 5 Heirloom Seed Packets", "Community Garden T-shirt", "Invitation to Opening Day Celebration"],
        backers: 23,
        delivery: "February 2024"
      }
    ]
  }
};

const CampaignDetail = () => {
  const { campaignId = "" } = useParams<{ campaignId: string }>();
  const { toast } = useToast();
  const [pledgeAmount, setPledgeAmount] = useState("");
  const [selectedRewardId, setSelectedRewardId] = useState("");
  
  // Get campaign data from mock data
  const campaign = mockCampaigns[campaignId] || mockCampaigns["eco-friendly-water-bottle"];
  
  const progress = Math.round((campaign.raised / campaign.goal) * 100);
  
  const handlePledge = () => {
    toast({
      title: "Thank you for your support!",
      description: `You have pledged $${pledgeAmount} to ${campaign.title}.`,
    });
    setPledgeAmount("");
  };
  
  const handleRewardSelect = (rewardId: string) => {
    setSelectedRewardId(rewardId);
    const reward = campaign.rewards.find(r => r.id === rewardId);
    setPledgeAmount(reward ? reward.amount.toString() : "");
    toast({
      title: "Reward selected",
      description: "Continue to complete your pledge.",
    });
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content area (2/3 width on lg screens) */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{campaign.title}</h1>
          
          <div className="mb-6 flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs">
              <Tag className="h-3 w-3 mr-1" />
              {campaign.category}
            </Badge>
            <Badge variant="outline" className="text-xs">
              <Clock className="h-3 w-3 mr-1" />
              {campaign.daysLeft} days left
            </Badge>
          </div>
          
          <div className="aspect-video w-full rounded-lg overflow-hidden mb-8">
            <img
              src={campaign.imageSrc}
              alt={campaign.title}
              className="w-full h-full object-cover"
            />
          </div>

          <Tabs defaultValue="story" className="w-full mb-8">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="story">Story</TabsTrigger>
              <TabsTrigger value="updates">Updates ({campaign.updates.length})</TabsTrigger>
              <TabsTrigger value="faq">FAQ ({campaign.faqs.length})</TabsTrigger>
              <TabsTrigger value="comments">Comments</TabsTrigger>
            </TabsList>
            
            <TabsContent value="story" className="mt-6">
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: campaign.fullDescription }} />
              
              <div className="mt-8 flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={campaign.creatorImage} alt={campaign.creatorName} />
                  <AvatarFallback>{campaign.creatorName[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm text-gray-500">Created by</p>
                  <h3 className="font-semibold">{campaign.creatorName}</h3>
                </div>
              </div>
              
              <p className="mt-4 text-gray-700">{campaign.creatorBio}</p>
            </TabsContent>
            
            <TabsContent value="updates" className="mt-6">
              {campaign.updates.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-gray-500">No updates yet. Check back soon!</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {campaign.updates.map((update) => (
                    <div key={update.id} className="border rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold">{update.title}</h3>
                        <span className="text-sm text-gray-500">
                          <Calendar className="inline h-4 w-4 mr-1" />
                          {new Date(update.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-700">{update.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="faq" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                {campaign.faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
            
            <TabsContent value="comments" className="mt-6">
              <div className="text-center py-10">
                <p className="text-gray-500">Comments coming soon!</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Sidebar (1/3 width on lg screens) */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-white rounded-lg border p-6 mb-6">
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <h3 className="text-2xl font-bold">${campaign.raised.toLocaleString()}</h3>
                  <span className="text-gray-500">of ${campaign.goal.toLocaleString()}</span>
                </div>
                <Progress value={progress} className="h-2 mb-2" />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>
                    <span className="font-semibold">{progress}%</span> funded
                  </span>
                  <span>
                    <span className="font-semibold">{campaign.daysLeft}</span> days left
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-6">
                <Users className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">
                  <span className="font-semibold">247</span> backers
                </span>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="pledgeAmount" className="block text-sm font-medium text-gray-700 mb-1">
                    Pledge Amount ($)
                  </label>
                  <Input
                    id="pledgeAmount"
                    type="number"
                    min="1"
                    value={pledgeAmount}
                    onChange={(e) => setPledgeAmount(e.target.value)}
                    placeholder="Enter amount"
                  />
                </div>
                
                <Button 
                  onClick={handlePledge} 
                  disabled={!pledgeAmount || Number(pledgeAmount) <= 0} 
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Back this project
                </Button>
              </div>
              
              <div className="flex space-x-2 justify-center text-sm text-gray-600">
                <button className="p-2 hover:text-primary transition-colors flex items-center">
                  <Heart className="h-4 w-4 mr-1" />
                  Favorite
                </button>
                <div className="border-r border-gray-300"></div>
                <button className="p-2 hover:text-primary transition-colors flex items-center">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </button>
                <div className="border-r border-gray-300"></div>
                <button className="p-2 hover:text-primary transition-colors flex items-center">
                  <Bookmark className="h-4 w-4 mr-1" />
                  Save
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Select a Reward</h3>
              
              <div className="space-y-4">
                {campaign.rewards.map((reward) => (
                  <div 
                    key={reward.id} 
                    className={`border rounded-lg p-4 cursor-pointer transition-all hover:border-primary ${selectedRewardId === reward.id ? 'border-primary ring-1 ring-primary' : ''}`}
                    onClick={() => handleRewardSelect(reward.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{reward.title}</h4>
                      <span className="font-bold text-primary">${reward.amount}</span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">{reward.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {reward.items.map((item, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>
                        <Users className="h-3 w-3 inline mr-1" />
                        {reward.backers} backers
                      </span>
                      <span>
                        <Calendar className="h-3 w-3 inline mr-1" />
                        Estimated delivery: {reward.delivery}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;
