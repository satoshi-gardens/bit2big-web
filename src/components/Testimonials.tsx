import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "bit2Big's cybersecurity solutions have significantly enhanced our company's digital security posture. Their team's expertise is unmatched.",
      author: "David Mukasa",
      role: "IT Director"
    },
    {
      quote: "The blockchain development and training programs provided by bit2Big have transformed how we approach digital assets.",
      author: "Christine Nalwoga",
      role: "Technology Lead"
    },
    {
      quote: "Their IT consulting services helped us modernize our infrastructure and improve efficiency across all departments.",
      author: "Robert Wasswa",
      role: "Operations Manager"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Client Success Stories
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto">
          See how we've helped organizations across Africa and Switzerland transform their digital landscape
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover-lift glass-effect">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/80 mb-4 italic">{testimonial.quote}</p>
              <div className="text-white font-semibold">{testimonial.author}</div>
              <div className="text-white/60 text-sm">{testimonial.role}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;