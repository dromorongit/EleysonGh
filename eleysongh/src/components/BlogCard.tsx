import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  featuredImage?: string;
  published: boolean;
  createdAt: string;
  author?: string;
}

const BlogCard = ({ title, slug, excerpt, featuredImage, published, createdAt, author = 'Eleyson Ghana Limited' }: BlogCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-slate-200">
      {featuredImage && (
        <Link href={`/blog/${slug}`}>
          <img
            src={featuredImage}
            alt={title}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>
      )}
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {new Date(createdAt).toLocaleDateString('en-GB', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            {author}
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-amber-600 transition-colors">
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h3>
        <p className="text-slate-600 mb-4 line-clamp-3">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors"
        >
          Read More
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;