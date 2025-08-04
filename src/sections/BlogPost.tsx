import { Card } from "@/components/Card";
import { getPostsByCategory, type BlogPost } from "@/data/blog-posts";
import Image from "next/image";
import Link from "next/link";

interface BlogPostProps {
  post: BlogPost;
}

export const BlogPostContent = ({ post }: BlogPostProps) => {
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

          {/* Featured Image */}
          {post.image && (
            <div className="relative w-full h-64 md:h-80 lg:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <Card className="p-8 md:p-12">
              {/* Add horizontal scroll container for content */}
              <div className="blog-content">
                <div 
                  className="text-white/80 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="sticky top-8 space-y-6">
              {/* Author Info */}
              <Card className="p-8">
                <h3 className="font-serif text-xl font-bold text-white mb-6">About the Author</h3>
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 bg-emerald-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-900 font-bold text-xl">PC</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white text-lg mb-1">Prince Chris Mazimpaka</p>
                    <p className="text-sm text-white/60">AI Researcher & Developer</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
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
              <Card className="p-8">
                <h3 className="font-serif text-xl font-bold text-white mb-6">Share Article</h3>
                <div className="flex gap-4">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    Twitter
                  </button>
                  <button className="flex-1 bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
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