import PageLayout from '../ui/PageLayout';
import BackToProcjectsButton from '../ui/BackToProcjectsButton';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const images = [
    {
      src: '/slide1.png',
      alt: 'Main menu of the application',
      width: 400,
      height: 300,
    },
    {
      src: '/slide2.png',
      alt: 'Level selector screen of the application',
      width: 400,
      height: 300,
    },
    {
      src: '/slide3.png',
      alt: 'Game screen of the application',
      width: 400,
      height: 300,
    },
  ];

  return (
    <PageLayout>
      <div className="max-w-5xl m-auto sm:p-6 md:p-8 lg:p-0">
        <BackToProcjectsButton />
        <h1 className="text-4xl font-bold mb-4">Logic Slide</h1>
        <p className="mb-4">
          I built <b>Logic Slide</b>, a modern take on the classic 15-puzzle
          game, to explore how far{' '}
          <a
            href="https://reactnative.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary"
          >
            React Native
          </a>{' '}
          has come since I last used it in 2018. This project was my deep dive
          into <b>cross-platform mobile development</b>, and it gave me hands-on
          experience with the latest tooling and best practices.
        </p>
        <p className="mb-4">
          Along the way, I integrated features like multiple game modes
          (Challenge & Free Play), level progression, ads, and in-app purchases.
          I also explored <b>mobile data storage</b> using{' '}
          <a
            href="https://github.com/Tencent/MMKV"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary"
          >
            MMKV
          </a>
          , which offered impressive performance for persisting user data across
          sessions.
        </p>
        <p className="mb-4">
          From designing a fluid UI to handling device-specific quirks and
          platform differences, this project helped me understand the unique
          <b>challenges of mobile development</b>, from gesture handling to app
          lifecycle and performance tuning.
        </p>
        <p className="mb-4">
          The app is now live on both the App Store and Google Play Store.
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
                className="hover:scale-110 transition-all duration-500"
              />
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-bold mt-4 mb-4" id="support">
          Support
        </h3>
        <p className="mb-4">
          For support please write me an e-mail: svetlin.dev at gmail.com
        </p>
        <p className="mb-4">
          If you enjoy the game, please consider leaving a review on the App
          Store or Google Play Store. Your feedback helps me improve and reach
          more players!
        </p>
        <Link href="/sliding-puzzle/privacy-policy">
          <span className="text-tertiary">Privacy policy</span>
        </Link>
      </div>
    </PageLayout>
  );
}
