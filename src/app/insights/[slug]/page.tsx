import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button, Section, Container } from "@/components";
import { insights, getInsightBySlug } from "@/data/insights";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  const slugs = [
    'future-of-solar-energy-ghana',
    'water-security-hydrogeology',
    'hybrid-solar-systems-best-of-both-worlds',
    'choosing-right-solar-panels-complete-guide',
    'borehole-drilling-success-what-you-need-to-know',
  ];
  return slugs.map((slug) => ({ slug }));
}

export default async function SingleArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = insights.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-energy-50 pt-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link href="/insights" className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Link>

            <div className="flex items-center space-x-4 mb-4">
              <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                {post.category || 'General'}
              </span>
              <span className="text-sm text-secondary-500 flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {post.publishedDate ? new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'N/A'}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-900 mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-secondary-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>
          </div>
        </Container>
      </Section>

      {/* Article Content */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            {post.featuredImage ? (
              <div className="aspect-video rounded-lg mb-8 relative overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="aspect-video bg-gradient-to-br from-energy-100 to-primary-100 rounded-lg mb-8" />
            )}

            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content || '' }} />

            <div className="mt-12 pt-8 border-t border-primary-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm">
                    Share Article
                  </Button>
                </div>
                <Link href="/contact">
                  <Button>
                    Discuss Your Project
                  </Button>
                </Link>
              </div>
            </div>

            {relatedPosts.length > 0 && (
              <div className="mt-12 pt-8 border-t border-primary-100">
                <h2 className="text-2xl font-serif font-bold text-primary-900 mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost, index) => (
                    <div key={relatedPost.slug || index} className="bg-white rounded-lg shadow-sm p-6 h-full">
                      <div className="aspect-video rounded mb-4 relative overflow-hidden">
                        <Image
                          src={relatedPost.featuredImage || '/images/insights.jpg'}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                          {relatedPost.category || 'General'}
                        </span>
                        <span className="text-sm text-secondary-500">
                          {relatedPost.publishedDate ? new Date(relatedPost.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'N/A'}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-primary-900 mb-2">{relatedPost.title}</h3>
                      <Link href={`/insights/${relatedPost.slug}`}>
                        <Button variant="outline" size="sm" className="w-full">
                          Read Article
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}