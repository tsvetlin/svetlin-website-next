import SocialList from '../Socials/SocialList';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center max-w-6xl m-auto mt-8">
      <div className="h-px bg-text w-full mb-8" />
      <SocialList />
      <p className="text-center mt-4 mb-8">
        <em>Szvetlin Tanyi</em> &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
