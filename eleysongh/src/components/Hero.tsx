import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  height?: 'small' | 'medium' | 'large';
}

const Hero = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  height = 'large'
}: HeroProps) => {
  const heightClasses = {
    small: 'h-64',
    medium: 'h-80',
    large: 'h-screen'
  };

  return (
    <section
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {subtitle && (
          <p className="text-amber-400 text-lg font-semibold mb-4 uppercase tracking-wide">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
            {description}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-400 transition-colors inline-flex items-center justify-center"
              >
                {primaryCta.text}
                <ArrowRight className="ml-2" size={20} />
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;