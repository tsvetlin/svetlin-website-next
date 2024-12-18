import Image from 'next/image';

export default function SocialIcon({
  src,
  alt,
  href,
}: {
  src: string;
  alt: string;
  href: string;
}) {
  return (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image
          className="dark:invert mr-8 hover:animate-rocking"
          src={src}
          alt={alt}
          width={40}
          height={40}
          priority
        />
      </a>
    </li>
  );
}
