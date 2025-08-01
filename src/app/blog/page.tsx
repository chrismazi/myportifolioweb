import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { BlogHero } from "@/sections/BlogHero";
import { BlogList } from "@/sections/BlogList";

export default function BlogPage() {
  return (
    <div>
      <Header />
      <BlogHero />
      <BlogList />
      <Footer />
    </div>
  );
} 