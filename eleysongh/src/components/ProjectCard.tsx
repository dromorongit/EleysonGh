import Link from 'next/link';
import { MapPin, Calendar } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  slug: string;
  category: string;
  location: string;
  summary: string;
  featuredImage?: string;
  isFeatured?: boolean;
}

const ProjectCard = ({ title, slug, category, location, summary, featuredImage, isFeatured }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-slate-200">
      {featuredImage && (
        <div className="h-48 bg-slate-200 relative">
          <img
            src={featuredImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          {isFeatured && (
            <div className="absolute top-2 right-2 bg-amber-500 text-slate-900 px-2 py-1 rounded text-xs font-semibold">
              Featured
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-amber-600 text-sm font-semibold uppercase tracking-wide">
            {category}
          </span>
          <div className="flex items-center text-slate-500 text-sm">
            <MapPin size={14} className="mr-1" />
            {location}
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 mb-4 line-clamp-3">{summary}</p>
        <Link
          href={`/projects/${slug}`}
          className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;