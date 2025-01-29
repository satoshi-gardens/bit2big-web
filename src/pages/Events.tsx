import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Link as LinkIcon, Mic, Video } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Events = () => {
  const upcomingWebinars = [
    {
      title: "Advanced Cybersecurity Practices in 2024",
      date: "March 15, 2024",
      time: "2:00 PM EST",
      description: "Join us for an in-depth discussion on emerging cybersecurity threats and how to protect your organization.",
      registrationLink: "#",
    },
    {
      title: "Blockchain Security Fundamentals",
      date: "March 28, 2024",
      time: "1:00 PM EST",
      description: "Learn about the essential security considerations for blockchain implementations.",
      registrationLink: "#",
    }
  ];

  const speakingEngagements = [
    {
      title: "CyberSec Conference 2024",
      date: "April 5, 2024",
      location: "Berlin, Germany",
      topic: "Enterprise Security Architecture",
      eventLink: "#",
      image: "photo-1605810230434-7631ac76ec81"
    },
    {
      title: "Tech Summit 2024",
      date: "May 15, 2024",
      location: "London, UK",
      topic: "Future of Cybersecurity",
      eventLink: "#",
      image: "photo-1519389950473-47ba0277781c"
    }
  ];

  const pastEvents = [
    {
      title: "Zero Trust Architecture Workshop",
      date: "January 20, 2024",
      type: "Webinar",
      recording: "#",
      slides: "#"
    },
    {
      title: "Security in Cloud Native Applications",
      date: "February 1, 2024",
      type: "Conference Talk",
      recording: "#",
      slides: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-white mb-8">Events & Speaking</h1>
        
        <Tabs defaultValue="webinars" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="webinars">Webinars</TabsTrigger>
            <TabsTrigger value="speaking">Speaking</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="webinars" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {upcomingWebinars.map((webinar, index) => (
                <Card key={index} className="glass-effect hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Video className="w-5 h-5" />
                      {webinar.title}
                    </CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-2 text-white/80">
                        <Calendar className="w-4 h-4" />
                        {webinar.date} at {webinar.time}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-white/80">{webinar.description}</p>
                    <Button className="w-full">Register Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="speaking" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {speakingEngagements.map((engagement, index) => (
                <Card key={index} className="glass-effect hover-lift overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/${engagement.image}`}
                      alt={engagement.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mic className="w-5 h-5" />
                      {engagement.title}
                    </CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-2 text-white/80">
                        <Calendar className="w-4 h-4" />
                        {engagement.date} - {engagement.location}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-white/80">Speaking on: {engagement.topic}</p>
                    <Button className="w-full">Event Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass-effect p-6">
              <h3 className="text-xl font-semibold mb-4">Book Me for Speaking</h3>
              <p className="text-white/80 mb-4">
                Available for conferences, workshops, and corporate events on topics including:
                cybersecurity, blockchain technology, and enterprise security architecture.
              </p>
              <Link to="/contact">
                <Button className="w-full md:w-auto">Contact for Speaking</Button>
              </Link>
            </Card>
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            <div className="grid gap-4">
              {pastEvents.map((event, index) => (
                <Card key={index} className="glass-effect">
                  <CardHeader>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription>
                      {event.date} - {event.type}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Video className="w-4 h-4" />
                        Watch Recording
                      </Button>
                      <Button variant="outline" className="flex items-center gap-2">
                        <LinkIcon className="w-4 h-4" />
                        View Slides
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Events;