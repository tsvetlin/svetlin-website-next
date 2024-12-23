import { Project } from './ProjectCard';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: 'Gastro Captain HTMX',
      description:
        'A project to explore the functionality of BunJS and HTMX. It is a meal planner application that enables users to generate a weekly meal plan based on preferred ingredients and macro nutrient goals.',
      image: '/gastro-htmx.png',
      technologies: ['BunJS', 'ElysiaJS', 'Turso', 'HTMX', 'SQLite'],
      url: '/gastro-captain-htmx',
    },
    {
      title: 'Together',
      description:
        'An Android application that I developed to track howw many days I have spent with my girlfriend and to remind me of important dates, anniversaries. The app had 150K+ downloads and 4.6 star rating in the Play Store, before I retired it in 2018.',
      image: '/together.png',
      technologies: ['Java', 'Android'],
      url: '/together',
    },
    {
      title: 'svetlin.eu (v1)',
      description: 'My old portfolio site that I have built with GatsbyJS',
      image: '/svetlin-v1.png',
      technologies: ['GatsbyJS', 'JavaScript'],
      url: 'https://v1.svetlin.eu',
    },
    {
      title: 'Green IoT Framework',
      description:
        'A fun little home automation project I have created while attending university. It consists of a Node.js server with a MongoDB database, and Pug templates for a frontend. I have also interfaced with Rasberry Pies and ESP8266 devices with various sensors. The project is open-source and available on GitHub.',
      image: '/green-iot.jpg',
      technologies: [
        'Node.js',
        'Pug',
        'MongoDB',
        'ESP8266',
        'Raspberry Pi',
        'Arduino',
      ],
      url: '/green-iot',
    },
    {
      title: 'ESP8266 Binary Clock',
      description:
        'A binary clock that I have built with an ESP8266 microcontroller. It uses the NTP protocol to get the current time and displays the time in binary format on a small OLED dsplay.',
      image: '/binary-clock.jpg',
      technologies: ['ESP8266', 'Arduino'],
      url: 'https://github.com/tsvetlin/binary-clock',
    },
  ];

  return (
    <section id="projects" className="max-w-5xl m-auto md:mt-16">
      <h1 className="p-4 md:p-0 text-4xl font-bold md:mb-4">Projects</h1>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </section>
  );
}
