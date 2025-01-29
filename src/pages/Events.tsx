import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Link as LinkIcon, Mic, Video } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Event } from "@/lib/supabase-types";
import { format } from "date-fns";

const Events = () => {
  const { data: events, isLoading } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });
      
      if (error) throw error;
      return data as Event[];
    },
  });

  const upcomingWebinars = events?.filter(event => 
    event.type === 'webinar' && new Date(event.date) > new Date()
  ) || [];

  const speakingEngagements = events?.filter(event => 
    event.type === 'conference' && new Date(event.date) > new Date()
  ) || [];

  const pastEvents = events?.filter(event => 
    new Date(event.date) < new Date()
  ) || [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 pb-12">
          <h1 className="text-4xl font-bold text-white mb-8">Loading events...</h1>
        </div>
      </div>
    );
  }

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
              {upcomingWebinars.map((webinar) => (
                <Card key={webinar.id} className="glass-effect hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Video className="w-5 h-5" />
                      {webinar.title}
                    </CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-2 text-white/80">
                        <Calendar className="w-4 h-4" />
                        {format(new Date(webinar.date), 'PPp')}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-white/80">{webinar.description}</p>
                    <Link to={`/events/${webinar.id}`}>
                      <Button className="w-full">View Details & Register</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="speaking" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {speakingEngagements.map((engagement) => (
                <Card key={engagement.id} className="glass-effect hover-lift overflow-hidden">
                  {engagement.image_url && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={engagement.image_url}
                        alt={engagement.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mic className="w-5 h-5" />
                      {engagement.title}
                    </CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-2 text-white/80">
                        <Calendar className="w-4 h-4" />
                        {format(new Date(engagement.date), 'PPp')} - {engagement.location}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-white/80">Speaking on: {engagement.topic}</p>
                    <Link to={`/events/${engagement.id}`}>
                      <Button className="w-full">Event Details</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            <div className="grid gap-4">
              {pastEvents.map((event) => (
                <Card key={event.id} className="glass-effect">
                  <CardHeader>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription>
                      {format(new Date(event.date), 'PPp')} - {event.type}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      <Link to={`/events/${event.id}`}>
                        <Button variant="outline" className="flex items-center gap-2">
                          <Video className="w-4 h-4" />
                          View Recording
                        </Button>
                      </Link>
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