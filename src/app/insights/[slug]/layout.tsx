import { insights } from "@/data/insights";

export async function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}