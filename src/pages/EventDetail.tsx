import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Event } from "@/lib/supabase-types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";
import { format } from "date-fns";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const EventDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [registrationForm, setRegistrationForm] = useState({
    name: "",
    email: "",
    company: "",
  });

  const { data: event, isLoading } = useQuery({
    queryKey: ['event', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data as Event;
    },
  });

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { error } = await supabase
      .from('event_registrations')
      .insert([
        {
          event_id: id,
          ...registrationForm,
        },
      ]);

    if (error) {
      toast({
        title: "Registration failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Registration successful",
        description: "You have been registered for this event.",
      });
      setRegistrationForm({ name: "", email: "", company: "" });
    }
  };

  if (isLoading || !event) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 pb-12">
          <h1 className="text-4xl font-bold text-white mb-8">Loading event...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <Link to="/events">
          <Button variant="outline" className="mb-8">
            ← Back to Events
          </Button>
        </Link>

        <Card className="glass-effect mb-8">
          {event.image_url && (
            <div className="h-64 w-full overflow-hidden">
              <img
                src={event.image_url}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <CardHeader>
            <CardTitle className="text-3xl">{event.title}</CardTitle>
            <CardDescription className="text-lg space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {format(new Date(event.date), 'PPp')}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {event.location}
              </div>
              {event.registration_limit && (
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Limited to {event.registration_limit} attendees
                </div>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-invert max-w-none">
              <p>{event.description}</p>
              {event.topic && (
                <>
                  <h3>Topic</h3>
                  <p>{event.topic}</p>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader>
            <CardTitle>Register for this Event</CardTitle>
            <CardDescription>
              Fill out the form below to register for {event.title}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegistration} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  value={registrationForm.name}
                  onChange={(e) => setRegistrationForm(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={registrationForm.email}
                  onChange={(e) => setRegistrationForm(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">
                  Company (Optional)
                </label>
                <Input
                  id="company"
                  value={registrationForm.company}
                  onChange={(e) => setRegistrationForm(prev => ({ ...prev, company: e.target.value }))}
                />
              </div>
              <Button type="submit" className="w-full">
                Register Now
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EventDetail;