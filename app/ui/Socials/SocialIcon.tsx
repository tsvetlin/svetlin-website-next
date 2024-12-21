import Image from 'next/image';

export default function SocialIcon({
  src,
  alt,
  href,
  index,
}: {
  src: string;
  alt: string;
  href: string;
  index: number;
}) {
  return (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image
          className={`invert ${
            index !== 0 ? 'ml-8' : ''
          } hover:animate-rocking`}
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
