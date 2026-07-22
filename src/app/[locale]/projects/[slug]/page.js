import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { 
  ProjectHero, 
  ProjectOverview, 
  ProjectChallenges, 
  ProjectCTA 
} from "@/features/projects";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { generateProjectSchema, generateBreadcrumbSchema } from "@/lib/seo";

// توليد الصفحات statically
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Metadata كاملة لكل صفحة
export async function generateMetadata({ params }) {
  const awaitedParams = await params;
  const project = projects.find((p) => p.slug === awaitedParams.slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
      robots: { index: false, follow: false },
    };
  }
  
  const url = `${SITE_URL}/projects/${project.slug}`;
  const title = `${project.name} | ${SITE_NAME}`;
  const description = project.shortDescription || project.description;
  
  return {
    title,
    description,
    
    keywords: [
      project.name,
      project.sector,
      project.client,
      `${project.sector} projects Saudi Arabia`,
      `${project.client} projects KSA`,
      project.location,
      `${project.sector} contractor`,
    ],
    
    alternates: {
      canonical: url,
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "article",
      images: [
        {
          url: project.image?.src || "/images/projects/hero.png",
          width: 1200,
          height: 630,
          alt: project.altText || project.name,
        },
      ],
    },
    
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.image?.src || "/images/projects/hero.png"],
      creator: "@highdamgroup",
      site: "@highdamgroup",
    },
    
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
  };
}

// مكون الصفحة
export default async function ProjectDetailsPage({ params }) {
  const awaitedParams = await params;
  const project = projects.find((p) => p.slug === awaitedParams.slug);
  
  if (!project) {
    notFound();
  }
  
  // Structured Data
  const projectSchema = generateProjectSchema(project);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: project.name, url: `/projects/${project.slug}` },
  ]);

  return (
    <>
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectChallenges project={project} />
      <ProjectCTA />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [projectSchema, breadcrumbSchema],
          }),
        }}
      />
    </>
  );
}