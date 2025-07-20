import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '../ui/PageLayout';
import BackToProcjectsButton from '../ui/BackToProcjectsButton';

export default function Page() {
  const imagesIOS = [
    {
      src: '/together-ios/together-ios-9.png',
      alt: 'Main screen with days counter',
      width: 402,
      height: 874,
    },
    {
      src: '/together-ios/together-ios-10.png',
      alt: 'Settings screen',
      width: 402,
      height: 874,
    },
    {
      src: '/together-ios/together-ios-1.png',
      alt: 'Onboarding welcome screen',
      width: 402,
      height: 874,
    },
    {
      src: '/together-ios/together-ios-2.png',
      alt: 'Couples can input their names',
      width: 402,
      height: 874,
    },
    {
      src: '/together-ios/together-ios-3.png',
      alt: 'Relationship date selector screen',
      width: 402,
      height: 874,
    },
    {
      src: '/together-ios/together-ios-4.png',
      alt: 'Preferences',
      width: 402,
      height: 874,
    },
    {
      src: '/together-ios/together-ios-5.png',
      alt: 'Image selector screen with placeholder',
      width: 402,
      height: 874,
    },
    {
      src: '/together-ios/together-ios-6.png',
      alt: 'Image cropping screen',
      width: 402,
      height: 874,
    },
    {
      src: '/together-ios/together-ios-7.png',
      alt: 'Image selector screen',
      width: 402,
      height: 874,
    },
    {
      src: '/together-ios/together-ios-8.png',
      alt: 'Onboarding finish screen',
      width: 402,
      height: 874,
    },
  ];
  const imagesAndroid = [
    {
      src: '/together-android/together-android-9.png',
      alt: 'Main screen with days counter',
      width: 360,
      height: 800,
    },
    {
      src: '/together-android/together-android-10.png',
      alt: 'Settings screen',
      width: 360,
      height: 800,
    },
    {
      src: '/together-android/together-android-11.png',
      alt: 'Permanent notification',
      width: 360,
      height: 800,
    },
    {
      src: '/together-android/together-android-1.png',
      alt: 'Onboarding welcome screen',
      width: 360,
      height: 800,
    },
    {
      src: '/together-android/together-android-2.png',
      alt: 'Couples can input their names',
      width: 360,
      height: 800,
    },
    {
      src: '/together-android/together-android-3.png',
      alt: 'Relationship date selector screen',
      width: 360,
      height: 800,
    },
    {
      src: '/together-android/together-android-4.png',
      alt: 'Preferences',
      width: 360,
      height: 800,
    },
    {
      src: '/together-android/together-android-5.png',
      alt: 'Image selector screen with placeholder',
      width: 360,
      height: 800,
    },
    {
      src: '/together-android/together-android-6.png',
      alt: 'Image cropping screen',
      width: 360,
      height: 800,
    },
    {
      src: '/together-android/together-android-7.png',
      alt: 'Image selector screen',
      width: 360,
      height: 800,
    },
    {
      src: '/together-android/together-android-8.png',
      alt: 'Onboarding finish screen',
      width: 360,
      height: 800,
    },
  ];

  return (
    <PageLayout>
      <div className="max-w-5xl m-auto sm:p-6 md:p-8 lg:p-0">
        <BackToProcjectsButton />
        <h1 className="text-4xl font-bold mb-4">Together</h1>
        <p className="mb-4">
          Together was originally launched in 2016. In 2025, I completely
          rebuilt the app with a modern stack for iOS and Android. The new
          version comes with a fresh design, beautiful animations.
        </p>
        <p>
          The app allows you to track how many days you have spent with your
          partner, and reminds you of important dates, anniversaries. The app is
          available for free on the App Store and Play Store.
        </p>
        {/*<h3 className="text-2xl font-bold mt-4 mb-4">Video</h3>
        <div className="flex justify-center mb-4">
          <iframe
            src="https://www.youtube.com/embed/todo"
            title="Together App Video"
            width="560"
            height="315"
            className="rounded-lg"
            allowFullScreen
          ></iframe>
        </div>*/}
        <h3 className="text-2xl font-bold mt-4 mb-4">iOS Screenshots</h3>
        <div className="flex flex-col md:flex-row items-center justify-around flex-wrap">
          {imagesIOS.map((image, index) => (
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

        <h3 className="text-2xl font-bold mt-4 mb-4">Android Screenshots</h3>
        <div className="flex flex-col md:flex-row items-center justify-around flex-wrap">
          {imagesAndroid.map((image, index) => (
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
        <Link href="/together/privacy-policy">
          <span className="text-tertiary">Privacy policy</span>
        </Link>
      </div>
    </PageLayout>
  );
}
