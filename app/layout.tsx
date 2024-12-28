import type { Metadata } from 'next';
import { cormorant, inter } from '@/app/ui/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Szvetlin Tanyi',
  description: "Szvetlin Tanyi's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
