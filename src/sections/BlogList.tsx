'use client';
import { useState } from 'react';
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { getBlogPosts, getPostsByCategory, getPostsByTag, type BlogPost } from "@/data/blog-posts";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import Link from "next/link";

const categories = [
  { name: 'All', value: 'all' },
  { name: 'Agriculture', value: 'Agriculture' },
  { name: 'Education', value: 'Education' },
  { name: 'Healthcare', value: 'Healthcare' },
  { name: 'Fintech', value: 'Fintech' },
  { name: 'Smart Cities', value: 'Smart Cities' },
];

export const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allPosts = getBlogPosts();
  
  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="AI for Africa"
          title="Latest Insights & Innovations"
          description="Exploring the transformative potential of AI across the African continent"
        />

        {/* Search and Filter */}
        <div className="mt-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-emerald-300 text-gray-900'
                    : 'bg-gray-800 text-white/70 hover:text-white hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="🔍 Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-300 w-64"
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="p-6 hover:scale-105 transition-transform duration-300">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-gray-700">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                {post.featured && (
                  <div className="absolute top-3 left-3 bg-emerald-300 text-gray-900 px-2 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-2 text-sm text-white/50 mb-3">
                <span>{formatDate(post.publishDate)}</span>
                <span>•</span>
                <span className="capitalize">{post.category}</span>
                <span>•</span>
                <span>{post.readingTime} min read</span>
              </div>
              
              <h3 className="text-xl font-serif font-bold mb-3 text-white">
                <Link href={`/blog/${post.slug}`} className="hover:text-emerald-300 transition-colors">
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-white/60 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-700 text-white/70 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition-colors font-medium"
              >
                Read More
                <ArrowUpRightIcon className="size-4" />
              </Link>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60 text-lg">No articles found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2 bg-emerald-300 text-gray-900 rounded-lg hover:bg-emerald-200 transition-colors"
            >
              View All Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
}; 