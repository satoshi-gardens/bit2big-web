import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ITConsulting = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    // In a real application, this would send the data to a server
    console.log(data);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            IT Consulting Services
          </h1>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Transforming businesses through strategic IT solutions and expert consulting
          </p>
        </section>

        {/* About Us Section */}
        <section className="mb-20">
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-white/80">
                  bit2Big is a leading IT consulting firm with a strong presence across Africa and Europe. 
                  Founded with a vision to bridge the technological gap between continents, we specialize 
                  in delivering innovative IT solutions that drive business growth and digital transformation.
                </p>
                <p className="text-white/80">
                  Our team of expert consultants brings decades of combined experience in various IT domains, 
                  ensuring that our clients receive the highest quality service and strategic guidance for 
                  their technology investments.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Our Presence</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#F2FF44]" />
                    <span>Switzerland (HQ)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#F2FF44]" />
                    <span>Uganda</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#F2FF44]" />
                    <span>Nigeria</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#F2FF44]" />
                    <span>Rwanda</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Get in Touch</h3>
                <div className="space-y-4">
                  <a href="mailto:contact@bit2big.com" 
                     className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                    <Mail className="w-5 h-5 text-[#F2FF44]" />
                    contact@bit2big.com
                  </a>
                  <a href="tel:+41123456789" 
                     className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                    <Phone className="w-5 h-5 text-[#F2FF44]" />
                    +41 12 345 67 89
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                  className="bg-white/5 border-white/10"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", { required: true })}
                  className="bg-white/5 border-white/10"
                />
                <Textarea
                  placeholder="Your Message"
                  {...register("message", { required: true })}
                  className="bg-white/5 border-white/10 min-h-[120px]"
                />
                <Button 
                  type="submit"
                  className="w-full bg-[#F2FF44] text-black hover:bg-[#E2EF34]"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ITConsulting;