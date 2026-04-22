import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Services } from "@/components/portfolio/Services";
import { Schedule } from "@/components/portfolio/Schedule";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { AppointmentFab } from "@/components/portfolio/AppointmentFab";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dr. Farhan Ahmed — Cardiologist, Dhaka | MBBS, FCPS" },
      {
        name: "description",
        content:
          "Dr. Farhan Ahmed is a leading consultant cardiologist in Dhaka with 12+ years of experience. Book appointments at Square, Labaid, and Popular chambers.",
      },
      { property: "og:title", content: "Dr. Farhan Ahmed — Cardiologist, Dhaka" },
      {
        property: "og:description",
        content: "Compassionate cardiac care across Dhaka. Book your appointment today.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Schedule />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AppointmentFab />
      <Toaster position="top-center" richColors />
    </div>
  );
}
