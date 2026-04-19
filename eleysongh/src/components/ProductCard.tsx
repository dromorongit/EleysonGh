import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  image?: string;
  isFeatured?: boolean;
}

const ProductCard = ({ name, slug, category, shortDescription, image, isFeatured }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-slate-200">
      {image && (
        <div className="h-48 bg-slate-200 relative">
          <img
            src={image}
            alt={name}
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
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{name}</h3>
        <p className="text-slate-600 mb-4 line-clamp-3">{shortDescription}</p>
        <Link
          href={`/products/${slug}`}
          className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700"
        >
          Learn More
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;