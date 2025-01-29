export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  type: string;
  topic?: string;
  image_url?: string;
  registration_limit?: number;
  created_at: string;
  updated_at: string;
}

export interface EventRegistration {
  id: string;
  event_id: string;
  email: string;
  name: string;
  company?: string;
  created_at: string;
}