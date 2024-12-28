import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main className="md:mr-8 p-4 md:p-0">{children}</main>
      <Footer />
    </div>
  );
}
