import Link from 'next/link';
import { MapPin, Calendar, ArrowRight, Star } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  slug: string;
  category: string;
  location: string;
  summary: string;
  featuredImage?: string;
  isFeatured?: boolean;
  completionDate?: string;
}

const ProjectCard = ({ title, slug, category, location, summary, featuredImage, isFeatured, completionDate }: ProjectCardProps) => {
  return (
    <div className="card-premium group overflow-hidden h-full flex flex-col">
      {/* Image Section */}
      {featuredImage && (
        <div className="relative h-56 overflow-hidden">
          <img
            src={featuredImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Featured Badge */}
          {isFeatured && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
              <Star size={12} />
              <span>Featured</span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 p-6">
        <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors leading-tight">
          {title}
        </h3>

        <p className="text-neutral-600 mb-4 line-clamp-3 leading-relaxed">
          {summary}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-neutral-500 mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <MapPin size={14} className="mr-1" />
              <span>{location}</span>
            </div>
            {completionDate && (
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>{completionDate}</span>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/projects/${slug}`}
          className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group-hover:translate-x-1 transition-all duration-300"
        >
          View Project Details
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>

      {/* Hover Effect Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default ProjectCard;