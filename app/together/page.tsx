import Image from 'next/image';

import PageLayout from '../ui/PageLayout';
import BackToProcjectsButton from '../ui/BackToProcjectsButton';

export default function Page() {
  const images = [
    {
      src: '/together-1.png',
      alt: 'Landing page of the application',
      width: 400,
      height: 300,
    },
    {
      src: '/together-2.png',
      alt: 'Supports various widget formats',
      width: 400,
      height: 300,
    },
    {
      src: '/together-3.png',
      alt: 'Crops your image to perfection',
      width: 400,
      height: 300,
    },
    {
      src: '/together-4.png',
      alt: 'Everything is customizable',
      width: 400,
      height: 300,
    },
  ];
  return (
    <PageLayout>
      <div className="max-w-5xl m-auto sm:p-6 md:p-8 lg:p-0">
        <BackToProcjectsButton />
        <h1 className="text-4xl font-bold mb-4">Together</h1>
        <p className="mb-4">
          I was having a hard time remembering my anniversary dates, so I
          decided to build an application to track it for me. It reminded be 7,
          3 and 1 day before the special day, so I could prepare flowers, gifts
          in advance.
        </p>
        <p>
          The application was built for Android phones and was published in the
          Play Store in 2016. It was downloaded by more than 150.000 users and
          had over 10.000 daily active users on average.
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
      </div>
    </PageLayout>
  );
}
