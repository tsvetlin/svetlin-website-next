import Image from 'next/image';
import ShortDescription from './ShortDescription';
import SocialList from '../Socials/SocialList';
import LongDescription from './LongDescription';

export default function AboutSection() {
  return (
    <section id="about" className="max-w-5xl m-auto">
      <div className="flex flex-row mb-8">
        <div>
          <h1 className="font-bold text-7xl mb-12">
            Hi there! I&apos;m Szvetlin.
          </h1>
          <ShortDescription />
          <div className="mr-8">
            <SocialList />
          </div>
        </div>

        <Image
          className="rounded-lg hover:scale-110 transition-all duration-500"
          src="/prof.jpeg"
          alt="Szvetlin"
          width={334}
          height={400}
          priority
        />
      </div>
      <LongDescription />
    </section>
  );
}
