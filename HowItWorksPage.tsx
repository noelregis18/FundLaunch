
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CTA from "@/components/CTA";
import { Check, BarChart, Award, Clock, Users, Bell, AlertCircle } from "lucide-react";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">How FundLaunch Works</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Whether you're looking to launch your own project or back others, learn how our platform helps bring ideas to life.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-6 py-16">
          <Tabs defaultValue="creators" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="creators">For Creators</TabsTrigger>
                <TabsTrigger value="backers">For Backers</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="creators" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Creators collaborating" 
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6">Launch Your Project</h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Create Your Campaign</h3>
                        <p className="text-gray-600">
                          Build a compelling campaign page that tells your story, showcases your idea, and explains how funds will be used.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <BarChart className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Set Your Funding Goal</h3>
                        <p className="text-gray-600">
                          Determine how much funding you need and set a realistic timeline for your campaign.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Create Rewards</h3>
                        <p className="text-gray-600">
                          Design attractive reward tiers to incentivize backers and show appreciation for their support.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Promote Your Campaign</h3>
                        <p className="text-gray-600">
                          Share your campaign with your network and use our promotional tools to reach potential backers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Campaign Success Factors</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold mb-3">Compelling Story</h4>
                    <p className="text-gray-600">
                      Share your passion and vision clearly. Explain why your project matters and how it will make a difference.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold mb-3">Engaging Media</h4>
                    <p className="text-gray-600">
                      Use high-quality photos and videos to showcase your project and build credibility with potential backers.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold mb-3">Regular Updates</h4>
                    <p className="text-gray-600">
                      Keep your community informed about your progress, challenges, and achievements throughout your campaign.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="backers" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Support Innovative Ideas</h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Discover Projects</h3>
                        <p className="text-gray-600">
                          Browse through campaigns by category or use our search tools to find projects that align with your interests.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Choose Your Reward</h3>
                        <p className="text-gray-600">
                          Select a reward tier that fits your budget and interests, or simply make a contribution without selecting a reward.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Bell className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Follow Progress</h3>
                        <p className="text-gray-600">
                          Receive updates from creators and follow the journey as they bring their projects to life.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Receive Rewards</h3>
                        <p className="text-gray-600">
                          When a project is successfully funded, creators will fulfill rewards for their backers according to their estimated timeline.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Supporter browsing campaigns" 
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
              
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-6">Important for Backers to Know</h3>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Understanding Crowdfunding Risks</h4>
                      <p className="text-gray-700">
                        Backing a project is not the same as purchasing a product. You're supporting someone's idea and helping them create something new, but there are no guarantees. Projects may face challenges, delays, or changes during development.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-3">Research Before Backing</h4>
                    <p className="text-gray-600">
                      Review the creator's background, project details, timeline, and consider if their goals seem realistic before deciding to back a project.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-3">Communication is Key</h4>
                    <p className="text-gray-600">
                      If you have questions or concerns about a project, reach out to the creator directly. Good creators are responsive and transparent.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What is FundLaunch?</h3>
                <p className="text-gray-600">
                  FundLaunch is a crowdfunding platform that helps creators raise funds for their projects while building a community of supporters.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How do I start a campaign?</h3>
                <p className="text-gray-600">
                  Click on "Start a Campaign" in the navigation menu, then follow the guided steps to create your campaign page.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What fees does FundLaunch charge?</h3>
                <p className="text-gray-600">
                  FundLaunch charges a 5% platform fee on the total funds raised, plus payment processing fees of approximately 3%.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What if a project doesn't reach its funding goal?</h3>
                <p className="text-gray-600">
                  FundLaunch uses an all-or-nothing funding model. If a project doesn't reach its goal, all backers receive a full refund.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Can I modify my pledge?</h3>
                <p className="text-gray-600">
                  Yes, you can modify or cancel your pledge any time before a campaign ends, as long as the campaign is still active.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How do creators receive funds?</h3>
                <p className="text-gray-600">
                  After a successful campaign ends, funds are transferred to the creator's verified bank account within 14 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
