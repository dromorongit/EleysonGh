import Link from 'next/link';
import { Calendar, User, ArrowRight, Clock, BookOpen } from 'lucide-react';

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  featuredImage?: string;
  published: boolean;
  createdAt: string;
  author?: string;
  category?: string;
  readTime?: number;
}

const BlogCard = ({ title, slug, excerpt, featuredImage, published, createdAt, author = 'Eleyson Ghana Limited', category, readTime }: BlogCardProps) => {
  return (
    <article className="card-premium group overflow-hidden h-full flex flex-col">
      {/* Image Section */}
      {featuredImage && (
        <div className="relative h-48 overflow-hidden">
          <Link href={`/blog/${slug}`}>
            <img
              src={featuredImage}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </Link>

          {/* Category Badge */}
          {category && (
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
              <BookOpen size={12} />
              <span>{category}</span>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 p-6">
        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              <span>{new Date(createdAt).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}</span>
            </div>
            {readTime && (
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                <span>{readTime} min read</span>
              </div>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors leading-tight">
          <Link href={`/blog/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>

        <p className="text-neutral-600 mb-4 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        {/* Author */}
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-neutral-500">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>

          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group-hover:translate-x-1 transition-all duration-300"
          >
            Read More
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Hover Effect Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </article>
  );
};

export default BlogCard;