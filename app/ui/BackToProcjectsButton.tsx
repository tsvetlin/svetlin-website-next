import Link from 'next/link';
import ArrowLeft from './ArrowLeft';

export default function BackButton() {
  return (
    <Link href="/#projects" className="flex mb-4 mt-2 hover:text-gray-400">
      <ArrowLeft />
      <span className="ml-2">Back to projects</span>
    </Link>
  );
}
