import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";

const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
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
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Contact Us
          </h1>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Get in touch with our team to discuss how we can help transform your business
          </p>
        </section>

        <section className="mb-20">
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <a href="mailto:contact@bit2big.com" 
                     className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                    <Mail className="w-6 h-6 text-[#F2FF44]" />
                    contact@bit2big.com
                  </a>
                  <a href="tel:+41123456789" 
                     className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                    <Phone className="w-6 h-6 text-[#F2FF44]" />
                    +41 12 345 67 89
                  </a>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Our Offices</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#F2FF44]" />
                      <span>Switzerland (HQ)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#F2FF44]" />
                      <span>Uganda</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#F2FF44]" />
                      <span>Nigeria</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#F2FF44]" />
                      <span>Rwanda</span>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
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

export default ContactUs;