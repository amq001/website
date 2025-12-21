import { projects, ProjectType } from "@/constants/dummy";
// import { projects } from "../../../data/projects";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;

  // Find the project based on slug
  const project = projects.find((p: ProjectType) => p.slug === slug);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div style={{ backgroundColor: project.color, padding: "2rem" }}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={`/images/${project.src}`} alt={project.title} width={400} />
      <p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Full Project
        </a>
      </p>
    </div>
  );
}
