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
          I wanted to build an app in React Native, to see how it developed
          since I last used it in 2018. I have added different game modes,
          levels, challenges, ads integration and in app purchases. The app is
          available on the App Store and Play Store.
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

        <Link href="/sliding-puzzle/privacy-policy">
          <span className="text-tertiary">Privacy policy</span>
        </Link>
      </div>
    </PageLayout>
  );
}
