import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href: string;
  features?: string[];
  category?: string;
}

const ServiceCard = ({ title, description, icon, href, features, category }: ServiceCardProps) => {
  return (
    <div className="card-premium group p-8 h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        {category && (
          <div className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full mb-4">
            {category}
          </div>
        )}

        {icon && (
          <div className="relative mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <div className="text-white">
                {icon}
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        )}

        <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">
          {title}
        </h3>

        <p className="text-neutral-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Features */}
      {features && features.length > 0 && (
        <div className="flex-1 mb-6">
          <ul className="space-y-3">
            {features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-neutral-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA */}
      <div className="mt-auto">
        <Link
          href={href}
          className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 font-semibold rounded-xl hover:from-primary-100 hover:to-primary-200 transition-all duration-300 group-hover:shadow-md"
        >
          Learn More
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full opacity-50 group-hover:opacity-70 transition-opacity blur-xl"></div>
    </div>
  );
};

export default ServiceCard;