"use client"
import { projects } from "@/constants/dummy";
// import { projects } from "../../../data/projects";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

type ProjectType = {
  title: string;
  description: string;
  slug: string;
  src: string;
  link: string;
  color: string;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  // Find the project based on slug
  const project = projects.find((p) => p.slug == slug);
  console.log(project, params,slug,"Hello")

  if (!project) {
    return <p>{slug}</p>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={`/images/${project.src}`} alt={project.title} width={400} />
      <p>
          View Full Project
      </p>
    </div>
  );
}
