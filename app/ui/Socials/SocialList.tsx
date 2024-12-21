import SocialIcon from './SocialIcon';

export default function SocialList() {
  const socials = [
    {
      src: '/github.svg',
      alt: 'GitHub',
      href: 'https://github.com/tsvetlin/tsvetlin',
    },
    {
      src: '/linkedin.svg',
      alt: 'LinkedIn',
      href: 'https://www.linkedin.com/in/szvetlin/',
    },
    {
      src: '/youtube.svg',
      alt: 'YouTube',
      href: 'https://www.youtube.com/@szvetlin',
    },
    {
      src: '/instagram.svg',
      alt: 'Instagram',
      href: 'https://www.instagram.com/szvetlin/',
    },
  ];

  return (
    <ul className="flex flex-row justify-center">
      {socials.map((social, index) => (
        <SocialIcon key={social.alt} index={index} {...social} />
      ))}
    </ul>
  );
}
