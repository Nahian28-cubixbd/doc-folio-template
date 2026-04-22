import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const chambers = [
  {
    name: "Square Hospital",
    address: "18/F West Panthapath, Dhaka 1205",
    days: "Sat — Mon",
    hours: "5:00 PM — 9:00 PM",
    phone: "+880 1711 000000",
  },
  {
    name: "Labaid Specialized Hospital",
    address: "House 06, Road 4, Dhanmondi, Dhaka",
    days: "Tue — Wed",
    hours: "6:00 PM — 9:30 PM",
    phone: "+880 1711 000000",
  },
  {
    name: "Popular Diagnostic Centre",
    address: "House 16, Road 2, Dhanmondi, Dhaka",
    days: "Thursday",
    hours: "6:00 PM — 9:00 PM",
    phone: "+880 1711 000000",
  },
];

export function Schedule() {
  return (
    <section id="schedule" className="relative bg-[var(--gradient-soft)] py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Chamber Schedule
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Where & when to find me.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three chambers across Dhaka. Walk-ins welcome — appointments preferred.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {chambers.map((c) => (
            <div
              key={c.name}
              className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm transition-shadow hover:shadow-[var(--shadow-card)]"
            >
              <h3 className="font-display text-2xl font-semibold tracking-tight">{c.name}</h3>
              <div className="mt-6 space-y-4 text-sm">
                <Row icon={<MapPin className="h-4 w-4" />} text={c.address} />
                <Row
                  icon={<Clock className="h-4 w-4" />}
                  text={
                    <>
                      <span className="font-medium text-foreground">{c.days}</span>
                      <span className="block text-muted-foreground">{c.hours}</span>
                    </>
                  }
                />
                <Row icon={<Phone className="h-4 w-4" />} text={c.phone} />
              </div>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="mt-6 w-full rounded-full"
              >
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(c.name + " " + c.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Map
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ icon, text }: { icon: React.ReactNode; text: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <div className="text-foreground">{text}</div>
    </div>
  );
}
