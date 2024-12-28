import PageLayout from '../ui/PageLayout';
import BackToProcjectsButton from '../ui/BackToProcjectsButton';

export default function Page() {
  return (
    <PageLayout>
      <div className="max-w-5xl m-auto sm:p-6 md:p-8 lg:p-0">
        <BackToProcjectsButton />
        <h1 className="text-4xl font-bold mb-4">Green IoT</h1>
        <p className="mb-4">
          Green IoT is a home automation framework that I built during
          university to push further my backend and frontend and devopsskills.
        </p>
        <p>
          The backend was built with{' '}
          <a
            href="https://nodejs.org/en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary"
          >
            Node.js
          </a>{' '}
          and{' '}
          <a
            href="https://expressjs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary"
          >
            Express
          </a>
          ,{' '}
          <a
            href="https://pugjs.org/api/getting-started.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary"
          >
            Pug
          </a>{' '}
          templates for frontend.{' '}
          <a
            href="https://www.raspberrypi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary"
          >
            Raspberry Pi
          </a>
          es were used to interface with the backend, they were called relays,
          connected to the internet. I also built{' '}
          <a
            href="https://en.wikipedia.org/wiki/ESP8266"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary"
          >
            ESP8266
          </a>{' '}
          based sensors that would send data to the backend via the relays. The
          ESP8266s were not connected to the internet, only to a local network.
          only.
        </p>
      </div>
    </PageLayout>
  );
}
