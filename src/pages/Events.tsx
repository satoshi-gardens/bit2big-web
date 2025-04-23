import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Globe, Building2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Event } from "@/lib/supabase-types";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

const Events = () => {
  const { data: events, isLoading } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true })
        .gte('date', new Date().toISOString());
      
      if (error) throw error;
      return data as Event[];
    },
  });

  const upcomingWebinars = events?.filter(event => 
    event.type === 'webinar'
  ) || [];

  const speakingEngagements = events?.filter(event => 
    event.type === 'conference'
  ) || [];

  const EventTypeIcon = ({ type }: { type: string }) => {
    if (type === 'webinar') {
      return <Globe className="w-4 h-4" />;
    }
    return <Building2 className="w-4 h-4" />;
  };

  const EventTypeBadge = ({ type }: { type: string }) => (
    <Badge 
      variant={type === 'webinar' ? 'secondary' : 'outline'} 
      className="flex items-center gap-1.5 font-medium"
    >
      <EventTypeIcon type={type} />
      {type === 'webinar' ? 'Online' : 'In Person'}
    </Badge>
  );

  const LocationDisplay = ({ location, type }: { location: string, type: string }) => (
    <div className="flex items-center gap-2 text-muted-foreground">
      {type === 'webinar' ? (
        <Globe className="w-4 h-4 text-muted" />
      ) : (
        <MapPin className="w-4 h-4 text-muted" />
      )}
      <span>{location}</span>
    </div>
  );

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

  const EventCard = ({ event }: { event: Event }) => (
    <Card key={event.id} className="glass-effect hover:shadow-lg transition-all duration-300">
      {event.image_url && (
        <div className="h-48 overflow-hidden rounded-t-lg">
          <img
            src={event.image_url}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-2xl font-bold text-foreground">
            {event.title}
          </CardTitle>
          <EventTypeBadge type={event.type} />
        </div>
        <CardDescription className="space-y-2 text-base">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            {format(new Date(event.date), 'PPp')}
          </div>
          <LocationDisplay location={event.location} type={event.type} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-muted-foreground line-clamp-2">{event.description}</p>
        <Link to={`/events/${event.id}`}>
          <Button className="w-full">
            {new Date(event.date) < new Date() ? 'View Recording' : 'View Details & Register'}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-foreground mb-8">Events & Speaking</h1>
        
        <Tabs defaultValue="webinars" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="webinars">Webinars</TabsTrigger>
            <TabsTrigger value="speaking">Speaking</TabsTrigger>
          </TabsList>

          <TabsContent value="webinars" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {upcomingWebinars.map((webinar) => (
                <EventCard key={webinar.id} event={webinar} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="speaking" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {speakingEngagements.map((engagement) => (
                <EventCard key={engagement.id} event={engagement} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Events;
