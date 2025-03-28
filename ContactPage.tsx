
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
