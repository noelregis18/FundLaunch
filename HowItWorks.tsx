
import { LightbulbIcon, UsersIcon, WalletIcon, RocketIcon } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <LightbulbIcon className="w-12 h-12 text-primary" />,
      title: "Share Your Idea",
      description: "Create a detailed campaign page showcasing your project, goals, and funding requirements.",
    },
    {
      icon: <UsersIcon className="w-12 h-12 text-primary" />,
      title: "Build a Community",
      description: "Share your campaign with friends, family, and social networks to gather support.",
    },
    {
      icon: <WalletIcon className="w-12 h-12 text-primary" />,
      title: "Get Funded",
      description: "Receive contributions from backers who believe in your vision and want to help.",
    },
    {
      icon: <RocketIcon className="w-12 h-12 text-primary" />,
      title: "Launch Your Project",
      description: "Use the funds to bring your idea to life and keep backers updated on your progress.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            From idea to reality in four simple steps. Here's how FundLaunch helps creators make things happen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
