import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ContactHero } from "@/sections/ContactHero";
import { ContactContent } from "@/sections/ContactContent";

export default function ContactPage() {
  return (
    <div>
      <Header />
      <ContactHero />
      <ContactContent />
      <Footer />
    </div>
  );
} 