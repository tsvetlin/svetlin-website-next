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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ducimus ratione harum, modi nihil porro? Minus officia vero voluptatem et? Eum aspernatur cum voluptatum deleniti totam repellat porro. Quidem, eligendi!',
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
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo dignissimos explicabo architecto at! Sapiente vero temporibus rem eaque laudantium vel?',
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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quod. Quisquam, molestias. Quam, quibusdam. Quisquam, molestias. Quam, quibusdam.',
      technologies: [
        'Java',
        'Android',
        'HTML',
        'CSS',
        'JavaScript',
        'Node.js',
        'React',
        'Docker',
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
