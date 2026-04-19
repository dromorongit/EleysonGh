import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import BlogCard from '@/components/BlogCard';
import { Tag, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - Eleyson Ghana Limited | Renewable Energy & Engineering Insights',
  description: 'Stay informed with the latest insights on renewable energy, solar installations, borehole drilling, and sustainable engineering solutions in Ghana and West Africa.',
  keywords: 'renewable energy blog, solar engineering, hydrogeological insights, sustainable engineering, Ghana energy news',
};

export default function BlogPage() {
  // Sample blog posts - in real app, fetch from database
  const blogPosts = [
    {
      title: 'The Future of Renewable Energy in Ghana',
      slug: 'future-renewable-energy-ghana',
      excerpt: 'Exploring the potential and challenges of renewable energy adoption in Ghana. Discover how solar and other renewable technologies are transforming the energy landscape across West Africa.',
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
      excerpt: 'Key considerations for sustainable water resource management. Learn about geophysical surveys, drilling techniques, and maintenance strategies for successful borehole projects.',
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
    {
      title: 'Solar Installation Trends in West Africa',
      slug: 'solar-installation-trends-west-africa',
      excerpt: 'Current trends and future outlook for solar energy installations across West Africa. From residential rooftops to large-scale solar farms, discover the growing solar landscape.',
      content: `The solar energy landscape in West Africa is undergoing rapid transformation. From small residential installations to large-scale solar farms, the region is embracing solar technology at an unprecedented pace.

      Residential solar systems are becoming increasingly popular as electricity costs rise and grid reliability challenges persist. Homeowners are investing in solar panels, batteries, and backup systems to achieve energy independence and reduce utility bills. In Ghana, the residential solar market has grown by over 300% in the past three years.

      Commercial and industrial sectors are also adopting solar solutions. Manufacturing facilities, hotels, and office complexes are installing solar systems to reduce operational costs and demonstrate corporate sustainability. The payback periods for these investments are typically 3-5 years, making solar economically attractive.

      Large-scale solar farms are emerging as significant contributors to the energy mix. Governments and private developers are investing in utility-scale solar projects that can provide clean energy to thousands of homes. These projects often include battery storage systems to ensure grid stability.

      Technological advancements are driving adoption. Decreasing solar panel costs, improved battery storage, and smart energy management systems are making solar solutions more accessible and efficient. Hybrid systems that combine solar with diesel generators are particularly popular in areas with unreliable grid power.

      The future looks promising for solar energy in West Africa. With supportive government policies, decreasing technology costs, and growing environmental awareness, solar adoption is expected to accelerate. The next decade will likely see solar become a dominant energy source across the region.`,
      featuredImage: '/images/blog/solar-trends.jpg',
      published: true,
      createdAt: '2024-01-01T10:00:00Z',
      author: 'Eleyson Ghana Limited',
      tags: ['solar installations', 'West Africa', 'renewable energy', 'market trends']
    },
    {
      title: 'Sustainable Water Management in Agriculture',
      slug: 'sustainable-water-management-agriculture',
      excerpt: 'How borehole systems and solar-powered pumps are revolutionizing agricultural water management. Case studies from Ghanaian farming communities.',
      content: `Water scarcity poses a significant challenge to agricultural productivity in many parts of Ghana. Traditional rainfall-dependent farming is increasingly unreliable due to changing weather patterns and population growth. Sustainable water management solutions are essential for food security and agricultural development.

      Borehole systems provide reliable water access for irrigation. Properly designed and maintained boreholes can supply water year-round, enabling farmers to cultivate crops during dry seasons and improve yields. Our hydrogeological expertise ensures that boreholes are optimally located and constructed for long-term performance.

      Solar-powered pumps offer an environmentally sustainable solution for water extraction. By harnessing solar energy, these systems eliminate fuel costs and reduce carbon emissions associated with diesel-powered pumps. The combination of boreholes and solar pumps creates a completely sustainable water supply system.

      We've implemented several successful agricultural water management projects across Ghana. In the Ashanti Region, a community borehole project increased crop yields by 40% and enabled year-round farming. Farmers who previously struggled with drought now have reliable irrigation water.

      The economic benefits extend beyond increased productivity. Reliable water access allows farmers to diversify crops, adopt modern farming techniques, and improve their livelihoods. Communities that invest in sustainable water infrastructure see long-term economic development and improved food security.

      Our approach integrates engineering expertise with community engagement. We work closely with local farmers and agricultural extension services to ensure that water systems meet actual needs and are properly maintained. Training programs for local operators ensure long-term system sustainability.

      The future of agriculture in Ghana depends on sustainable water management. Borehole systems and solar-powered pumps represent a proven solution that can transform agricultural productivity and ensure food security for future generations.`,
      featuredImage: '/images/blog/agricultural-water.jpg',
      published: true,
      createdAt: '2023-12-20T10:00:00Z',
      author: 'Eleyson Ghana Limited',
      tags: ['agricultural water', 'sustainable farming', 'borehole systems', 'solar pumps']
    },
    {
      title: 'Energy Storage Solutions for Solar Systems',
      slug: 'energy-storage-solutions-solar-systems',
      excerpt: 'Understanding battery storage technologies and their role in maximizing solar system performance. A comprehensive guide to energy storage options.',
      content: `Energy storage is a critical component of modern solar systems. Batteries store excess solar energy for use during nighttime or cloudy periods, ensuring reliable power supply and maximizing system benefits.

      Lithium-ion batteries have become the standard for solar energy storage. These batteries offer high energy density, long cycle life, and excellent performance characteristics. We recommend lithium-ion solutions for most residential and commercial applications due to their reliability and decreasing costs.

      Battery capacity and power ratings must match system requirements. We conduct detailed load analysis to determine appropriate battery sizing. Factors like daily energy consumption, backup duration requirements, and solar system size influence battery selection.

      Advanced battery management systems ensure optimal performance and longevity. Features like state-of-charge monitoring, temperature compensation, and automatic disconnect protection maximize battery life and system safety.

      The economic case for battery storage is compelling. In areas with high electricity costs or unreliable grids, batteries can significantly reduce energy expenses. The ability to store solar energy during the day and use it during peak evening hours avoids expensive peak-time electricity rates.

      We integrate battery storage with solar systems to create comprehensive energy solutions. Our hybrid systems combine solar panels, batteries, and sometimes diesel generators to ensure 24/7 power availability. This approach is particularly valuable for critical applications like hospitals, data centers, and remote facilities.

      Proper installation and commissioning are crucial for battery system performance. Our certified technicians follow manufacturer specifications and industry best practices to ensure optimal system operation.

      Looking ahead, battery storage costs continue to decline while performance improves. This trend will make solar-plus-storage systems increasingly attractive for a wide range of applications. The combination of solar generation and battery storage represents the future of reliable, sustainable energy.`,
      featuredImage: '/images/blog/energy-storage.jpg',
      published: true,
      createdAt: '2023-12-15T10:00:00Z',
      author: 'Eleyson Ghana Limited',
      tags: ['energy storage', 'lithium batteries', 'solar systems', 'backup power']
    },
    {
      title: 'Geophysical Survey Techniques for Borehole Siting',
      slug: 'geophysical-survey-techniques-borehole-siting',
      excerpt: 'Advanced geophysical methods for optimal borehole location identification. Learn about survey techniques that maximize drilling success rates.',
      content: `Successful borehole development begins with accurate site selection. Geophysical surveys provide critical information about subsurface conditions, groundwater potential, and optimal drilling locations. At Eleyson Ghana Limited, we employ advanced geophysical techniques to maximize project success.

      Vertical Electrical Sounding (VES) is our primary geophysical method. This technique measures subsurface electrical resistivity to identify water-bearing formations and determine aquifer characteristics. VES provides detailed information about groundwater depth, quality, and yield potential.

      Electromagnetic surveys complement VES by detecting conductive groundwater zones. This method is particularly effective in areas with complex geology or when rapid reconnaissance is needed. Electromagnetic techniques can cover large areas quickly while providing reliable groundwater indicators.

      Seismic refraction surveys assess subsurface layering and identify bedrock depth. This information is crucial for determining borehole construction requirements and predicting drilling challenges. Seismic data helps us select appropriate drilling methods and casing designs.

      Our survey process includes multiple stages. Initial desktop studies review existing geological data and identify promising areas. Field surveys then collect geophysical data, followed by detailed data analysis and interpretation.

      The result is precise borehole siting that minimizes drilling risks and maximizes success rates. Our geophysical surveys have achieved over 95% success rates in groundwater exploration projects across Ghana.

      We combine geophysical data with hydrogeological expertise to provide comprehensive recommendations. This integrated approach ensures that boreholes are optimally located for long-term water supply reliability.

      Advanced geophysical techniques represent the foundation of successful borehole projects. By investing in thorough site investigation, we deliver sustainable water solutions that serve communities and industries for decades.`,
      featuredImage: '/images/blog/geophysical-survey.jpg',
      published: true,
      createdAt: '2023-12-10T10:00:00Z',
      author: 'Eleyson Ghana Limited',
      tags: ['geophysical survey', 'borehole siting', 'groundwater exploration', 'survey techniques']
    }
  ];

  const categories = ['All', 'Solar Energy', 'Hydrogeology', 'Sustainable Development', 'Engineering Insights'];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Engineering Insights & Industry Updates"
        subtitle="Knowledge Hub"
        description="Stay informed with the latest insights on renewable energy, hydrogeological engineering, and sustainable development solutions across Ghana and West Africa."
        primaryCta={{
          text: "Subscribe to Updates",
          href: "#newsletter"
        }}
        height="medium"
      />

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Expert insights on renewable energy, sustainable engineering, and industry developments
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-slate-100 hover:bg-amber-500 hover:text-white text-slate-700 rounded-full transition-colors flex items-center gap-2"
              >
                <Tag size={16} />
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                slug={post.slug}
                excerpt={post.excerpt}
                featuredImage={post.featuredImage}
                published={post.published}
                createdAt={post.createdAt}
                author={post.author}
              />
            ))}
          </div>

          {/* Load More / Pagination would go here */}
          <div className="text-center">
            <p className="text-slate-600 mb-6">Showing 6 of 15+ articles</p>
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-lg transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-slate-900 text-white" id="newsletter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get the latest insights on renewable energy and engineering delivered to your inbox
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
          <p className="text-sm text-slate-400 mt-4">
            Join 500+ professionals staying ahead in sustainable engineering
          </p>
        </div>
      </section>

      {/* Topics We Cover */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Topics We Cover
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive coverage of renewable energy and engineering topics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☀️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Solar Technology</h3>
              <p className="text-slate-600">
                Latest developments in solar panels, inverters, and energy storage systems
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Water Resources</h3>
              <p className="text-slate-600">
                Hydrogeological insights, borehole technology, and water management
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Sustainability</h3>
              <p className="text-slate-600">
                Environmental impact, sustainable development, and green engineering
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Engineering Excellence</h3>
              <p className="text-slate-600">
                Best practices, case studies, and industry standards in engineering
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}