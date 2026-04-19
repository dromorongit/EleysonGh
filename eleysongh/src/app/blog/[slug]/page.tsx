import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, User, Tag, Share2, ArrowRight } from 'lucide-react';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Sample blog posts data - same as in blog page
const blogPosts = [
  {
    title: 'The Future of Renewable Energy in Ghana',
    slug: 'future-renewable-energy-ghana',
    excerpt: 'Exploring the potential and challenges of renewable energy adoption in Ghana.',
    content: `Ghana stands at a pivotal moment in its energy transition. With abundant sunlight and growing demand for sustainable solutions, renewable energy represents not just an opportunity, but a necessity for the nation's development.

The International Energy Agency projects that Ghana's energy demand will triple by 2040. Meeting this demand through traditional fossil fuels would be environmentally unsustainable and economically challenging. Instead, Ghana has positioned itself as a leader in renewable energy adoption across West Africa.

Solar energy, in particular, offers immense potential. With an average of 5.5 peak sun hours per day, Ghana's solar irradiance is among the highest in the world. This natural advantage, combined with decreasing solar panel costs and improving technology, makes solar power increasingly viable for both large-scale installations and distributed generation.

However, challenges remain. Grid infrastructure needs modernization, financing mechanisms must be developed, and technical expertise needs to be built. Policy frameworks and regulatory environments must also evolve to support renewable energy deployment.

Despite these challenges, the momentum is building. Government initiatives, private sector investments, and international partnerships are accelerating Ghana's renewable energy transition. The coming years will be crucial in determining whether Ghana becomes a renewable energy leader or remains dependent on imported fossil fuels.

The future of renewable energy in Ghana is bright, but realizing that potential requires coordinated action from government, industry, and civil society.`,
    featuredImage: '/images/blog/renewable-energy.jpg',
    published: true,
    createdAt: '2024-01-15T10:00:00Z',
    author: 'Eleyson Ghana Limited',
    tags: ['renewable energy', 'solar power', 'Ghana energy', 'sustainability']
  },
  {
    title: 'Hydrogeological Best Practices for Borehole Development',
    slug: 'hydrogeological-best-practices',
    excerpt: 'Key considerations for sustainable water resource management.',
    content: `Successful borehole development requires a systematic approach that combines scientific understanding, engineering expertise, and operational excellence. At Eleyson Ghana Limited, we follow proven methodologies that ensure sustainable water access for communities and industries.

The process begins with comprehensive geophysical surveys. Using advanced techniques like vertical electrical sounding and electromagnetic surveys, we identify optimal borehole locations and assess groundwater potential. This critical first step minimizes drilling risks and maximizes success rates.

Once suitable locations are identified, our drilling operations follow international best practices. We employ modern rotary drilling techniques with appropriate casing and screen installation to ensure long-term well performance. Quality control measures throughout the drilling process ensure that wells meet both yield and water quality requirements.

Post-drilling, proper development and testing are crucial. We conduct thorough yield testing, water quality analysis, and aquifer parameter determination. This data informs pump selection and helps predict long-term well performance.

Maintenance and monitoring don't end with commissioning. We establish comprehensive maintenance schedules and provide training for local operators. Regular water quality testing and pump performance monitoring ensure continued reliable service.

Our approach has delivered successful borehole projects across Ghana, providing sustainable water solutions for rural communities, agricultural operations, and industrial facilities.`,
    featuredImage: '/images/blog/hydrogeology.jpg',
    published: true,
    createdAt: '2024-01-08T10:00:00Z',
    author: 'Eleyson Ghana Limited',
    tags: ['hydrogeology', 'borehole drilling', 'water resources', 'sustainability']
  },
  // Add other posts here for completeness, but keeping it shorter for brevity
];

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found - Eleyson Ghana Limited',
    };
  }

  return {
    title: `${post.title} - Eleyson Ghana Limited Blog`,
    description: post.excerpt,
    keywords: post.tags?.join(', ') || 'engineering blog, renewable energy',
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-slate-500 hover:text-slate-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-slate-400">/</span>
              </li>
              <li>
                <Link href="/blog" className="text-slate-500 hover:text-slate-700">
                  Blog
                </Link>
              </li>
              <li>
                <span className="text-slate-400">/</span>
              </li>
              <li>
                <span className="text-slate-900 font-medium">{post.title}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          {post.featuredImage && (
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg mb-8 shadow-lg"
            />
          )}

          {/* Article Meta */}
          <div className="flex items-center space-x-6 mb-6 text-slate-500">
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              {new Date(post.createdAt).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center">
              <User size={18} className="mr-2" />
              {post.author}
            </div>
          </div>

          {/* Article Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Article Excerpt */}
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Tags */}
          {post.tags && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-slate-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share Section */}
          <div className="border-t border-slate-200 mt-12 pt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-slate-600 font-medium">Share this article:</span>
                <button className="p-2 text-slate-500 hover:text-slate-700 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
              <div className="flex items-center space-x-2">
                {post.tags?.slice(0, 3).map((tag, index) => (
                  <span key={index} className="text-sm text-slate-500">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.slug} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {relatedPost.featuredImage && (
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <img
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-amber-600 transition-colors">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">{relatedPost.excerpt}</p>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get more insights like this delivered to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-slate-900 rounded-lg"
              required
            />
            <button
              type="submit"
              className="bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>
    </div>
  );
}