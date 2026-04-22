import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/8801711000000?text=Hello%20Dr.%20Farhan%2C%20I%27d%20like%20to%20book%20an%20appointment.";

export function AppointmentFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book appointment on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-success text-success-foreground shadow-xl shadow-success/40 transition-transform hover:scale-110 animate-pulse-ring"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
