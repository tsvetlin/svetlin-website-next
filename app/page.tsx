import Header from './ui/Header/Header';
import AboutSection from './ui/About/AboutSection';
import ExperienceSection from './ui/Experience/ExperienceSection';
import ProjectsSection from './ui/Projects/ProjectsSection';
import Footer from './ui/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
