
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary/90 to-secondary/90 text-white">
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 space-y-6 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Bring Your Ideas<br />To Life Together
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              FundLaunch helps creators, innovators, and changemakers gather support 
              for their groundbreaking ideas and meaningful causes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
                <Link to="/campaigns">Explore Projects</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/start-campaign">Start a Campaign</Link>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="bg-white p-3 rounded-lg shadow-xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaborating on a project" 
                className="rounded h-64 w-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-secondary/80 to-primary/80 py-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold">$24M+</p>
              <p className="text-sm opacity-80">Funds Raised</p>
            </div>
            <div>
              <p className="text-3xl font-bold">2,500+</p>
              <p className="text-sm opacity-80">Successful Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold">150K+</p>
              <p className="text-sm opacity-80">Backers</p>
            </div>
            <div>
              <p className="text-3xl font-bold">60+</p>
              <p className="text-sm opacity-80">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
