
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Turn Your Idea Into Reality?
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Join thousands of creators who have successfully funded their projects and made their dreams come true.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
            <Link to="/start-campaign">Start Your Campaign</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
            <Link to="/campaigns">Explore Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
