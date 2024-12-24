import Link from 'next/link';
import Footer from '../ui/Footer/Footer';

export default function Page() {
  return (
    <div className="flex flex-col">
      <Link href="/#projects">Back to projects</Link>
      <h1>Together</h1>
      <Footer />
    </div>
  );
}
