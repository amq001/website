import Image from "next/image";
import { projects } from "@/constants/data";
import HeroSection from "@/components/HeroSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import SectionComponent from "@/components/SectionComponent";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

type ProjectType = {
  title: string;
  tagline: string;
  details: { image: string; description: string; colour: string }[];
  slug: string;
  src: string;
  features: string[];
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug == slug) as ProjectType;

  if (!project) {
    return <p>{slug}</p>;
  }

  return (
    <>
      <HeroSection heading={project?.title} description={project?.tagline} />
      <div className="max-w-7xl mx-auto p-4 flex flex-col gap-2">
        <div className="flex flex-col gap-20">
          {project?.details.map((detail, index) => (
            <SectionComponent
              key={index}
              index={index}
              colour={detail.colour}
              image={detail.image}
              description={detail.description}
            />
          ))}
        </div>
        <p className="text-white max-w-4xl text-xl md:text-2xl font-semibold mt-12">
          {`Core Features & Benefits`}
        </p>
        {project?.features && (
          <ul className="list-disc list-inside text-white max-w-4xl text-xl">
            {project.features.map((feature, index) => (
              <li key={index} className="mb-2 text-sm md:text-lg">
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
      <ReviewsSection />
      <ContactUsSection />
      <Footer />
    </>
  );
}
