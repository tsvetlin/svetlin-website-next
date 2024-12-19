import Header from './ui/Header/Header';
import AboutSection from './ui/About/AboutSection';
import ExperienceSection from './ui/Experience/ExperienceSection';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <AboutSection />
        <ExperienceSection />
      </main>
    </div>
  );
}
