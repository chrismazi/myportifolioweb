import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { BlogPostContent } from "@/sections/BlogPost";
import { getPostBySlug, getBlogPosts } from "@/data/blog-posts";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Header />
      <BlogPostContent post={post} />
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
} 