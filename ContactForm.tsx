
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              Have questions about how FundLaunch works or need assistance with your campaign? 
              Get in touch with us and we'll be happy to help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:noel.regis04@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                    noel.regis04@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:7319546900" className="text-gray-600 hover:text-primary transition-colors">
                    +91 7319546900
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Github className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">GitHub</h3>
                  <a href="https://github.com/noelregis18" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                    github.com/noelregis18
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Linkedin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/noel-regis-aa07081b1/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                    linkedin.com/in/noel-regis-aa07081b1
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Office</h3>
                  <p className="text-gray-600">
                    Asansol, West Bengal<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  rows={6}
                />
              </div>
              
              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
