import Image from 'next/image';
import Header from './ui/Header/Header';
import SocialList from './ui/About/SocialList';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="max-w-5xl m-auto">
          <div className="flex flex-row mb-8">
            <div>
              <h1 className="font-bold text-7xl mb-12">
                Hi there! I'm Szvetlin.
              </h1>
              <div className="mr-4">
                <p className="mb-4 text-justify">
                  I'm passionate about developing applications that address
                  real-world challenges, making life easier for myself and
                  others. With a love for exploring both
                  <em className="highlight"> frontend</em> and
                  <em className="highlight"> backend </em>
                  development, I often dive into{' '}
                  <em className="highlight">DevOps</em> to craft a truly
                  well-rounded <em className="highlight">full-stack</em>{' '}
                  experience.
                </p>
                <p className="mb-8 text-justify">
                  Beyond coding, I love growing different varieties of
                  <em className="highlight"> hot peppers</em> and exploring the
                  outdoors on long walks with my
                  <em className="highlight"> dogs</em>. As a content creator, I
                  enjoy documenting my journey, sharing insights, and breaking
                  down what I've learned to
                  <em className="highlight"> help others grow</em>. Check out my
                  YouTube channel, where I share tips, vlogs, and more!
                </p>
              </div>
              <div>
                <SocialList />
              </div>
            </div>
            <Image
              className="rounded-lg"
              src="/prof.jpeg"
              alt="Szvetlin"
              width={334}
              height={500}
              priority
            />
          </div>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            eleifend id sapien vitae commodo. Cras euismod, tortor non suscipit
            molestie, odio purus tempus tellus, eu efficitur diam nulla ac
            massa. Quisque eget eros tempor, auctor ante vitae, interdum dolor.
            Fusce venenatis tortor eget aliquam vulputate. Donec interdum, leo
            eget semper bibendum, nisi nisi venenatis augue, at rhoncus sapien
            ligula quis est. Proin vitae pretium turpis. Donec posuere a dui
            quis volutpat. Nam tristique aliquam ipsum et pulvinar. Morbi
            vestibulum, erat
          </p>
        </section>
      </main>
    </div>
  );
}
