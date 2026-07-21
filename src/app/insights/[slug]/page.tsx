import Link from "next/link";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import { Button, Section, Container } from "@/components";
import { insights, getInsightBySlug } from "@/data/insights";
import { Insight } from "@/data/insights";
import Image from "next/image";
import { motion } from "framer-motion";

export async function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function SingleArticlePage({ params }: { params: { slug: string } }) {
  const post = getInsightBySlug(params.slug) as Insight | undefined;

  if (!post) {
    return (
      <>
        <Section className="bg-gradient-to-br from-primary-50 to-energy-50 min-h-[50vh] flex items-center">
          <Container>
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article not found</h2>
              <Link href="/insights">
                <Button>Back to Insights</Button>
              </Link>
            </div>
          </Container>
        </Section>
      </>
    );
  }

  const relatedPosts = insights.filter((p) => p.slug !== params.slug).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-energy-50 pt-24">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div variants={fadeInUp}>
              <Link href="/insights" className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Insights
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
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
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Article Content */}
      <Section>
        <Container>
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {post.featuredImage ? (
              <motion.div
                className="aspect-video rounded-lg mb-8 relative overflow-hidden"
                variants={fadeInUp}
              >
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ) : (
              <motion.div
                className="aspect-video bg-gradient-to-br from-energy-100 to-primary-100 rounded-lg mb-8"
                variants={fadeInUp}
              />
            )}

            <motion.div className="prose prose-lg max-w-none" variants={fadeInUp} dangerouslySetInnerHTML={{ __html: post.content || '' }} />

            <motion.div
              className="mt-12 pt-8 border-t border-primary-100"
              variants={fadeInUp}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Article
                  </Button>
                </div>
                <Link href="/contact">
                  <Button>
                    Discuss Your Project
                  </Button>
                </Link>
              </div>
            </motion.div>

            {relatedPosts.length > 0 && (
              <motion.div
                className="mt-12 pt-8 border-t border-primary-100"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-serif font-bold text-primary-900 mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost: Insight, index: number) => (
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
              </motion.div>
            )}
          </motion.div>
        </Container>
      </Section>
    </>
  );
}