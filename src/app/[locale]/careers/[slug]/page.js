// import { notFound } from "next/navigation";
// import { jobs } from "@/data/jobs";
// import JobHero from "@/features/careers/career-details/JobHero";
// import JobDescription from "@/features/careers/career-details/JobDescription";
// import JobRequirements from "@/features/careers/career-details/JobRequirements";
// import JobResponsibilities from "@/features/careers/career-details/JobResponsibilities";
// import ApplySection from "@/features/careers/career-details/ApplySection";
// import { SITE_NAME, SITE_URL } from "@/lib/constants";
// import { generateJobPostingSchema, generateBreadcrumbSchema } from "@/lib/seo";

// // توليد الصفحات statically
// export async function generateStaticParams() {
//   return jobs.map((job) => ({
//     slug: job.slug,
//   }));
// }

// // Metadata كاملة لكل صفحة
// export async function generateMetadata({ params }) {
//   const awaitedParams = await params;
//   const job = jobs.find((j) => j.slug === awaitedParams.slug);
  
//   if (!job) {
//     return {
//       title: "Job Not Found",
//       robots: { index: false, follow: false },
//     };
//   }
  
//   const url = `${SITE_URL}/careers/${job.slug}`;
//   const title = `${job.title} Job | ${SITE_NAME}`;
//   const description = job.description || `Join ${SITE_NAME} as a ${job.title}. Apply now for this exciting career opportunity in Saudi Arabia.`;
  
//   return {
//     title,
//     description,
    
//     keywords: [
//       job.title,
//       `${job.title} jobs Saudi Arabia`,
//       `${job.title} jobs KSA`,
//       `${job.title} career`,
//       "construction jobs Saudi Arabia",
//       "High Dam Group careers",
//       job.department || "construction",
//       job.location || "Saudi Arabia",
//     ],
    
//     alternates: {
//       canonical: url,
//     },
    
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         "max-video-preview": -1,
//         "max-image-preview": "large",
//         "max-snippet": -1,
//       },
//     },
    
//     openGraph: {
//       title,
//       description,
//       url,
//       siteName: SITE_NAME,
//       locale: "en_US",
//       type: "article",
//       images: [
//         {
//           url: "/images/careers/hero.jpg",
//           width: 1200,
//           height: 630,
//           alt: `${job.title} position at ${SITE_NAME}`,
//         },
//       ],
//     },
    
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: ["/images/careers/hero.jpg"],
//       creator: "@highdamgroup",
//       site: "@highdamgroup",
//     },
    
//     authors: [{ name: SITE_NAME, url: SITE_URL }],
//     creator: SITE_NAME,
//     publisher: SITE_NAME,
//   };
// }

// // مكون الصفحة
// export default async function JobDetailsPage({ params }) {
//   const awaitedParams = await params;
//   const job = jobs.find((j) => j.slug === awaitedParams.slug);
  
//   if (!job) {
//     notFound();
//   }
  
//   // Structured Data
//   const jobPostingSchema = generateJobPostingSchema(job);
//   const breadcrumbSchema = generateBreadcrumbSchema([
//     { name: "Home", url: "/" },
//     { name: "Careers", url: "/careers" },
//     { name: job.title, url: `/careers/${job.slug}` },
//   ]);

//   return (
//     <>
//       <JobHero job={job} />
//       <JobDescription job={job} />
//       <JobRequirements job={job} />
//       <JobResponsibilities job={job} />
//       <ApplySection job={job} />
      
//       {/* Structured Data */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@graph": [jobPostingSchema, breadcrumbSchema],
//           }),
//         }}
//       />
//     </>
//   );
// }