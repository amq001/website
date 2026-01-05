"use client";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import HeroSection3 from "@/components/HeroSection3";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { projects } from "@/constants/dummy";
import { desc } from "motion/react-client";
import Image from "next/image";
// import { projects } from "../../../data/projects";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

type ProjectType = {
  title: string;
  tagline: string;
  description1: string;
  description2: string;
  description3: string;
  slug: string;
  src: string;
  // link: string;
  // color: string;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  // Find the project based on slug
  const project = projects.find((p) => p.slug == slug);
  console.log(project, params, slug, "Hello");

  if (!project) {
    return <p>{slug}</p>;
  }

  return (
    <>
      <HeroSection3
        heading={project?.title}
        description={project?.tagline}
        type="hero"
      />
      <div className="max-w-7xl mx-auto p-4">
        {/* <h1>{project.title}</h1> */}
        {/* <h1>{project.title}</h1> */}
        {/* <h1>{project.title}</h1> */}
        {/* <p>{project.description}</p> */}
        <div className="flex flex-col items-center gap-8 mb-8">
          <Image
            src={project?.src}
            alt={project?.title}
            width={800}
            height={600}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-white max-w-4xl text-2xl font-semibold mt-12">
            {`What is ${project?.title}?`}
          </p>
          <p className="text-white max-w-4xl text-xl">
            {project?.description1}
          </p>
          <p className="text-white max-w-4xl text-xl">
            {project?.description2}
          </p>
          <p className="text-white max-w-4xl text-xl">
            {project?.description3}
          </p>
          <p className="text-white max-w-4xl text-2xl font-semibold mt-12">
            {`Core Features & Benefits`}
          </p>
          {project?.features && (
            <ul className="list-disc list-inside text-white max-w-4xl text-xl">
              {project.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  {" "}
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <InfiniteMovingCardsDemo />
      <ContactUsSection />
      <Footer />
    </>
  );
}
