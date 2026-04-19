import Link from 'next/link';
import { ArrowRight, Star, Package } from 'lucide-react';

interface ProductCardProps {
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  image?: string;
  isFeatured?: boolean;
  price?: string;
}

const ProductCard = ({ name, slug, category, shortDescription, image, isFeatured, price }: ProductCardProps) => {
  return (
    <div className="card-premium group overflow-hidden h-full flex flex-col">
      {/* Image Section */}
      {image && (
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

          {/* Featured Badge */}
          {isFeatured && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
              <Star size={12} />
              <span>Premium</span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
            <Package size={12} />
            <span>{category}</span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 p-6">
        <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors leading-tight">
          {name}
        </h3>

        <p className="text-neutral-600 mb-4 line-clamp-3 leading-relaxed">
          {shortDescription}
        </p>

        {/* Price */}
        {price && (
          <div className="mb-4">
            <span className="text-2xl font-bold text-primary-600">{price}</span>
          </div>
        )}

        {/* CTA */}
        <Link
          href={`/products/${slug}`}
          className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group-hover:translate-x-1 transition-all duration-300"
        >
          View Details
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>

      {/* Hover Effect Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default ProductCard;