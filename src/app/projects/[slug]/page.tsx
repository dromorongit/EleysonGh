import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button, Section, Container, MediaGallery } from "@/components";
import { getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projectSlugs = [
    'solar-residential-installation-at-sunyani',
    'solar-residential-installation-at-kpong',
    'geophysics-survey-borehole-drilling-pump-installation',
    'geophysics-survey-borehole-drilling-pump-installation-obourtumpah',
    'geophysics-survey-borehole-drilling-pump-installation-koforidua',
    'solar-residential-installation-at-dansoman',
    'solar-residential-installation-at-pantang-backup-solution',
    'solar-residential-installation-at-dome',
  ];
  return projectSlugs.map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-0 pb-0">
        <div className="relative h-[60vh] min-h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.featuredImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />
          <Container className="relative h-full flex items-end pb-12">
            <div className="max-w-4xl p-8 md:p-10">
              <Link
                href="/projects"
                className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
              <span className="inline-block px-3 py-1 bg-gold text-navy text-sm font-medium rounded mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 hero-text-shadow">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <span>{project.location}</span>
                <span>•</span>
                <span>{project.clientType}</span>
              </div>
            </div>
          </Container>
        </div>
      </Section>

      {/* Gallery & Specs */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content - Gallery */}
            <div className="lg:col-span-2">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">
                  Project Gallery
                </h2>
                <MediaGallery
                  items={project.galleryImages.map((mediaUrl: string, index: number) => {
                    const isVideo = mediaUrl.toLowerCase().endsWith('.mp4') ||
                      mediaUrl.toLowerCase().endsWith('.mov') ||
                      mediaUrl.toLowerCase().endsWith('.avi');
                    return {
                      type: isVideo ? "video" : "image",
                      src: mediaUrl,
                      alt: `${project.title} - ${isVideo ? 'Video' : 'Image'} ${index + 1}`,
                    };
                  })}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Technical Specs */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-serif font-bold text-primary-900 mb-4">
                    Technical Specifications
                  </h3>
                  <div className="space-y-3">
                    {project.technicalSpecs.map((spec, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                        <span className="text-secondary-600">{spec.key}</span>
                        <span className="font-medium text-primary-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-primary-900 text-white rounded-xl p-6">
                  <h3 className="text-xl font-serif font-bold mb-4">
                    Interested in a Similar Project?
                  </h3>
                  <p className="text-primary-100 mb-6">
                    Contact us today to discuss your water or energy needs and get a customized solution.
                  </p>
                  <Link href="/request-a-quote">
                    <Button variant="gold" className="w-full">
                      Request a Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}