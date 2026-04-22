import { Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#schedule", label: "Schedule" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const WHATSAPP_URL = "https://wa.me/8801711000000?text=Hello%20Dr.%20Farhan%2C%20I%27d%20like%20to%20book%20an%20appointment.";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
            <Stethoscope className="h-4 w-4" />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">
            Dr. Farhan Ahmed
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm" className="rounded-full">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Book Appointment
          </a>
        </Button>
      </div>
    </header>
  );
}
