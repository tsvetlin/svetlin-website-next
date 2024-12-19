import ExperienceCard from './ExperienceCard';
import { Experience } from './ExperienceCard';

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      from: '2024',
      to: 'Present',
      company: 'Instructure',
      companyUrl: 'https://www.instructure.com/',
      jobTitle: 'Senior Software Engineer',
      description:
        'I mainly work on Outcomes, a product that helps educators to assess students and improve their learning outcomes. I am leading the modernization efforts on breaking out Outcomes from the monolith into microservices. To find a more easily maintainble and cost effective solution.',
      technologies: [
        'Ruby',
        'Ruby on Rails',
        'NestJS',
        'Docker',
        'AWS',
        'React',
        'TypeScript',
        'GraphQL',
        'PostgreSQL',
      ],
    },
    {
      from: '2022',
      to: '2024',
      company: 'Artera',
      companyUrl: 'https://www.artera.io/',
      jobTitle: 'Software Engineer',
      description:
        'Worked on a healthcare communication platform that enabled healthcare providers to easily communicate with their patients. Worked closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices. Driven frontend testing efforts, including unit and integration tests, to ensure the quality of the product.',
      technologies: [
        'TypeScript',
        'React',
        'NestJS',
        'Node.js',
        'GraphQL',
        'PostgreSQL',
        'Docker',
        'AWS',
      ],
    },
    {
      from: '2018',
      to: '2022',
      company: 'AITIA',
      companyUrl: 'https://www.aitia.ai/',
      jobTitle: 'Software Engineer',
      description: (
        <>
          Worked on creating JavaScript based applications and websites in the
          field of Industrial IoT, Service Oriented Architectures and Management
          Solutions. I have been actively involved in European projects (
          <a
            href="https://productive40.eu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary"
          >
            Productive4.0
          </a>
          ,{' '}
          <a
            href="https://tools.arrowhead.eu/home/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary"
          >
            Arrowhead Tools
          </a>
          ) either as Work Package leader or Task Leader and I was a member of
          the Management Committee. I also oversaw the development of the{' '}
          <a
            href="https://arrowhead.eu/eclipse-arrowhead-2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary"
          >
            Eclipse Arrowhead Framework
          </a>
          .
        </>
      ),
      technologies: [
        'JavaScript',
        'TypeScript',
        'React',
        'Node.js',
        'SQLite',
        'PostgreSQL',
        'Docker',
        'Flutter',
        'Java',
      ],
    },
    {
      from: '2015',
      to: '2018',
      company: 'Tappointment',
      companyUrl: 'https://www.tappointment.com/',
      jobTitle: 'Software Engineer',
      description:
        "Worked on multiple Android applications, mainly focusing on the company's mobile application that enabled users to book appointments with local businesses. Later worked on developing websites, and various web applications. Worked closely with the product team to define the product roadmap and prioritize features.",
      technologies: [
        'Java',
        'Android',
        'HTML',
        'CSS',
        'JavaScript',
        'Node.js',
        'React',
        'Docker',
        'AWS',
      ],
    },
  ];
  return (
    <section className="max-w-5xl m-auto mt-16">
      Experience
      {experiences.map((experience) => (
        <ExperienceCard key={experience.company} experience={experience} />
      ))}
    </section>
  );
}
