
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const successStories = [
  {
    id: "eco-product",
    category: "Product",
    name: "Sarah Johnson",
    title: "Sustainable Packaging Solution",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    quote: "FundLaunch helped me bring my biodegradable packaging concept to market. What started as an idea in my garage is now being used by businesses across the country!",
    raisedAmount: "$45,000",
    backers: 320,
  },
  {
    id: "community-garden",
    category: "Community",
    name: "Michael Chen",
    title: "Urban Rooftop Gardens",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    quote: "Our community needed green spaces. With the funding we received, we've created 12 rooftop gardens that provide fresh produce to local food banks and schools.",
    raisedAmount: "$28,500",
    backers: 215,
  },
  {
    id: "education-app",
    category: "Technology",
    name: "Priya Patel",
    title: "Language Learning App",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    quote: "My app has now helped over 50,000 people learn new languages. FundLaunch provided the initial boost we needed to hire developers and launch our first version.",
    raisedAmount: "$62,000",
    backers: 475,
  },
  {
    id: "film-production",
    category: "Arts",
    name: "James Rodriguez",
    title: "Independent Documentary",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    quote: "Our documentary has now been screened at three film festivals and won a regional award. None of this would have been possible without our FundLaunch backers.",
    raisedAmount: "$38,000",
    backers: 290,
  },
];

const SuccessStories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Success Stories</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Meet the creators who turned their ideas into reality with the help of FundLaunch
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="Product">Products</TabsTrigger>
              <TabsTrigger value="Community">Community</TabsTrigger>
              <TabsTrigger value="Technology">Technology</TabsTrigger>
              <TabsTrigger value="Arts">Arts</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {successStories.map((story) => (
                <StoriesCard key={story.id} story={story} />
              ))}
            </div>
          </TabsContent>

          {["Product", "Community", "Technology", "Arts"].map((category) => (
            <TabsContent key={category} value={category} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {successStories
                  .filter((story) => story.category === category)
                  .map((story) => (
                    <StoriesCard key={story.id} story={story} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

interface Story {
  id: string;
  category: string;
  name: string;
  title: string;
  image: string;
  quote: string;
  raisedAmount: string;
  backers: number;
}

const StoriesCard = ({ story }: { story: Story }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4">
          <Avatar className="w-16 h-16 border-2 border-primary/20">
            <AvatarImage src={story.image} alt={story.name} />
            <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-semibold">{story.name}</h3>
            <p className="text-primary font-medium">{story.title}</p>
          </div>
        </div>
        
        <blockquote className="italic text-gray-700 border-l-4 border-primary/20 pl-4 my-4">
          "{story.quote}"
        </blockquote>
        
        <div className="flex justify-between text-sm text-gray-600 mt-6">
          <div>
            <span className="font-semibold">Raised:</span> {story.raisedAmount}
          </div>
          <div>
            <span className="font-semibold">Backers:</span> {story.backers}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SuccessStories;
