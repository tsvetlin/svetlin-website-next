import Image from 'next/image';

import PageLayout from '../ui/PageLayout';
import BackToProcjectsButton from '../ui/BackToProcjectsButton';

export default function Page() {
  const images = [
    {
      src: '/gastro-htmx-1.png',
      alt: 'Landing page of the application',
      width: 600,
      height: 400,
    },
    {
      src: '/gastro-htmx-2.png',
      alt: 'Ingredients page',
      width: 600,
      height: 400,
    },
  ];
  return (
    <PageLayout>
      <div className="max-w-5xl m-auto sm:p-6 md:p-8 lg:p-0">
        <BackToProcjectsButton />
        <h1 className="text-4xl font-bold mb-4">Gastro Captain HTMX</h1>
        <p className="mb-4">
          Gastro captain is a meal planner application, that helps you plan your
          weekly meal plan based on your preferences and dietary restrictions.
        </p>
        <p>
          I used{' '}
          <a
            href="https://bun.sh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary"
          >
            Bun
          </a>
          ,{' '}
          <a
            href="https://elysiajs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary"
          >
            ElysiaJS
          </a>
          ,{' '}
          <a
            href="https://turso.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary"
          >
            Turso
          </a>{' '}
          and{' '}
          <a
            href="https://htmx.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary"
          >
            HTMX
          </a>{' '}
          to build this application. My intention was to try some new
          technologies and broaden my horizons.
        </p>
        <h3 className="text-2xl font-bold mt-4 mb-4">Screenshots</h3>
        <div className="flex flex-col md:flex-row items-center justify-around flex-wrap">
          {images.map((image, index) => (
            <div
              className={`h-min overflow-hidden rounded-lg md:mr-4 md:mb-4 ${
                index !== 0 ? 'mt-4 md:mt-0' : ''
              }`}
              key={image.src}
            >
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
