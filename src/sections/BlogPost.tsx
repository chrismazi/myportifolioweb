import { Card } from "@/components/Card";
import { getPostsByCategory, type BlogPost } from "@/data/blog-posts";
import Image from "next/image";
import Link from "next/link";

interface BlogPostProps {
  post: BlogPost;
}

export const BlogPost = ({ post }: BlogPostProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const relatedPosts = getPostsByCategory(post.category)
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/blog" className="hover:text-emerald-300 transition-colors">
              ← Back to Blog
            </Link>
            <span>•</span>
            <span>{formatDate(post.publishDate)}</span>
            <span>•</span>
            <span className="capitalize">{post.category}</span>
            <span>•</span>
            <span>{post.readingTime} min read</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            {post.title}
          </h1>

          <p className="text-xl text-white/60 mb-8 max-w-3xl">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-800 text-white/70 text-sm rounded-full border border-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {post.image && (
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-gray-700 mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <Card className="p-8 md:p-12">
              <div className="prose prose-invert prose-lg max-w-none">
                <div className="text-white/80 leading-relaxed whitespace-pre-wrap">
                  {post.content}
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Author Info */}
              <Card className="p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-4">About the Author</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-lg">PC</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Prince Chris Mazimpaka</p>
                    <p className="text-sm text-white/60">AI Researcher & Developer</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm">
                  Passionate about leveraging AI to solve real-world challenges across Africa.
                </p>
              </Card>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <Card className="p-6">
                  <h3 className="font-serif text-xl font-bold text-white mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        href={`/blog/${relatedPost.slug}`}
                        className="block group"
                      >
                        <h4 className="font-medium text-white group-hover:text-emerald-300 transition-colors mb-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-white/60 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </Link>
                    ))}
                  </div>
                </Card>
              )}

              {/* Share */}
              <Card className="p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-4">Share Article</h3>
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Twitter
                  </button>
                  <button className="flex-1 bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    LinkedIn
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 