import Link from 'next/link';

export default function ListItem({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <li className="content-center lg:ml-8">
      <Link className="underline-effect" href={href}>
        {text}
      </Link>
    </li>
  );
}
