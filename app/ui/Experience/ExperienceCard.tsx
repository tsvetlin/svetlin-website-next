import ArrowIcon from './ArrowIcon';

export type Experience = {
  from: string;
  to: string;
  company: string;
  companyUrl: string;
  jobTitle: string;
  description: string | React.ReactNode;
  technologies: string[];
};

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="group grid grid-cols-6 mb-8 rounded-lg hover:bg-slate-700/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg">
      <div className="hidden md:block md:col-span-1 mr-4 col-span-0 p-4">
        <p className="text-nowrap">
          {experience.from} - {experience.to}
        </p>
      </div>
      <div className="flex flex-col col-span-6 md:col-span-5 p-4">
        <p className="block md:hidden text-nowrap">
          {experience.from} - {experience.to}
        </p>
        <a
          className="font-cormorant font-bold text-3xl mb-4 group-hover:text-primary"
          href={experience.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${experience.jobTitle} at ${experience.company} (opens in a new tab)`}
        >
          <div className="flex items-center">
            {`${experience.jobTitle} · ${experience.company}`}
            <ArrowIcon />
          </div>
        </a>
        <p className="text-gray-400 text-justify">{experience.description}</p>
        <div className="flex flex-row mt-4 flex-wrap">
          {experience.technologies.map((technology) => (
            <div
              key={technology}
              className="bg-primary/10 text-primary rounded-full px-4 py-1 mr-2 mb-2"
            >
              {technology}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
