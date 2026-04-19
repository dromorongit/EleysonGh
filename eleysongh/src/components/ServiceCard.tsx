import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href: string;
  features?: string[];
}

const ServiceCard = ({ title, description, icon, href, features }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-slate-200">
      {icon && (
        <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      {features && (
        <ul className="text-sm text-slate-500 mb-4 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      <Link
        href={href}
        className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700"
      >
        Learn More
        <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;