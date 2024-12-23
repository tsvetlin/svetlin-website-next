import Image from 'next/image';
import ArrowIcon from '../Experience/ArrowIcon';
export type Project = {
  title: string;
  url: string;
  description: string;
  image: string;
  technologies?: string[];
  metadata?: Map<string, string>;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group grid grid-cols-6 mb-8 rounded lg hover:bg-slate-700/50  hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg">
      <div className="hidden md:block mr-4 col-span-0 md:col-span-2 p-4 flex items-center">
        <Image
          className="rounded"
          src={project.image}
          alt={project.title}
          width={300}
          height={200}
        />
      </div>
      <div className="flex flex-col col-span-6 md:col-span-4 p-4">
        <a
          className="font-cormorant font-bold text-3xl mb-4 group-hover:text-primary"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={project.title}
        >
          <div className="flex items-center">
            {`${project.title}`}
            <ArrowIcon />
          </div>
        </a>
        <p className="text-gray-400 text-justify">{project.description}</p>
        <div className="flex justify-center mt-4 md:hidden">
          <Image
            className="rounded"
            src={project.image}
            alt={project.title}
            width={300}
            height={200}
          />
        </div>
        {project.technologies && project.technologies.length && (
          <div className="flex flex-row mt-4 flex-wrap">
            {project.technologies.map((technology) => (
              <div
                key={technology}
                className="bg-primary/10 text-primary rounded-full px-4 py-1 mr-2 mb-2"
              >
                {technology}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
