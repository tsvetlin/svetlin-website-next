import PageLayout from '../ui/PageLayout';
import BackToProcjectsButton from '../ui/BackToProcjectsButton';
import Link from 'next/link';

export default function Page() {
  return (
    <PageLayout>
      <div className="max-w-5xl m-auto sm:p-6 md:p-8 lg:p-0">
        <BackToProcjectsButton />
        <h1 className="text-4xl font-bold mb-4">Sliding Puzzle</h1>
        <Link href="/sliding-puzzle/privacy-policy">
          <span>Privacy policy</span>
        </Link>
      </div>
    </PageLayout>
  );
}
