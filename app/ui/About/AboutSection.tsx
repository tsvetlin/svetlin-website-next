import Image from 'next/image';
import ShortDescription from './ShortDescription';
import SocialList from '../Socials/SocialList';
import LongDescription from './LongDescription';

export default function AboutSection() {
  return (
    <section id="about" className="max-w-5xl m-auto sm:p-6 md:p-8 lg:p-0">
      <div className="flex flex-col md:flex-row mb-8">
        <div className="flex-1 mb-8 md:mb-0">
          <h1 className="text-center md:text-left font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8 md:mb-12">
            Hi there! I&apos;m Szvetlin.
          </h1>
          <ShortDescription />
          <div className="sm:mt-6 md:mt-8">
            <SocialList />
          </div>
        </div>

        <div className="flex justify-center md:justify-end rounded-lg overflow-hidden items-center">
          <Image
            className="rounded-lg hover:scale-110 transition-all duration-500 object-contain"
            src="/prof.jpeg"
            alt="Szvetlin"
            width={334}
            height={400}
            priority
          />
        </div>
      </div>
      <LongDescription />
    </section>
  );
}
