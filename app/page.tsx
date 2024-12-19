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
              <div className="mr-8">
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
              className="rounded-lg hover:scale-110 transition-all duration-500"
              src="/prof.jpeg"
              alt="Szvetlin"
              width={334}
              height={400}
              priority
            />
          </div>
          <p className="text-justify mb-4">
            As a kid, I loved tinkering with computers, but everything changed
            in 2010 when I got my first Android phone. Discovering I could
            create applications sparked my passion for development. I started
            learning Java and Android development from YouTube during high
            school, which set me on a path to pursue this passion further in
            university.
          </p>
          <p className="text-justify mb-4">
            One thing led to another, and I began my career as an Android
            developer. Along the way, I explored web and backend development,
            which broadened my perspective on the immense impact of software
            engineering. In my early 20s, I developed a fascination for
            microcontrollers and electronics, bridging the gap between software
            and the physical world. This passion led me to create
            Bluetooth-enabled cars, robots, and home automation projects.
          </p>
          <p className="text-justify">
            Inspired by YouTube content creators, I decided to share my own
            projects and journey with the world. I’m constantly learning,
            growing, and expanding my horizons, always eager to explore what’s
            next.
          </p>
        </section>
      </main>
    </div>
  );
}
