import Link from 'next/link';
import { ArrowRight, Play, Award, Users, TrendingUp } from 'lucide-react';

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
  showStats?: boolean;
}

const Hero = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  height = 'large',
  showStats = false
}: HeroProps) => {
  const heightClasses = {
    small: 'h-96',
    medium: 'h-[500px]',
    large: 'min-h-screen'
  };

  const stats = [
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Users, label: 'Projects Completed', value: '500+' },
    { icon: TrendingUp, label: 'Client Satisfaction', value: '98%' }
  ];

  return (
    <section
      className={`relative ${heightClasses[height]} flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900`}
    >
      {/* Background Image with Premium Overlay */}
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/80 to-primary-900/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </>
      )}

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary-400/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary-400/10 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {subtitle && (
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse"></div>
                <p className="text-secondary-300 font-semibold uppercase tracking-wider text-sm">
                  {subtitle}
                </p>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">{title.split(' ').slice(0, -2).join(' ')}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-secondary-200">
                {title.split(' ').slice(-2).join(' ')}
              </span>
            </h1>

            {description && (
              <p className="text-lg md:text-xl text-neutral-200 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {description}
              </p>
            )}

            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="btn-primary group text-lg px-8 py-4 shadow-2xl"
                  >
                    {primaryCta.text}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="btn-secondary group text-lg px-8 py-4"
                  >
                    <Play className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                    {secondaryCta.text}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Visual Element or Stats */}
          <div className="hidden lg:block">
            {showStats ? (
              <div className="grid grid-cols-1 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-secondary-500/20 rounded-xl group-hover:bg-secondary-500/30 transition-colors">
                        <stat.icon className="w-8 h-8 text-secondary-300" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-secondary-200 text-sm font-medium">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl">
                      <Award className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Engineering Excellence</h3>
                    <p className="text-secondary-200">Delivering premium solutions since 2009</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;