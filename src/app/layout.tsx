import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tai - Alongamento de Fibra, Esmaltação em Gel, Manicure & Pedicure",
  description: "Descubra os melhores tratamentos de beleza na Tailine: alongamento de fibra, esmaltação em gel, manicure, pedicure e spa dos pés. Agende sua sessão agora para uma experiência luxuosa de cuidado pessoal!",
  verification: {
    google: 'FTxLqbp0qDXP2wjlN97Vw2iUjGB9ES9A0xrXb2sp3xs',
  }, 
  openGraph: {
    images: [
      {
        url: 'https://www.tailine.online/image2.jpg',
        width: 1200,
        height: 630,
        alt: 'Tailine - Alongamento de fibra • Esmaltação em Gel • Manicure • Pedicure • Spa dos pés',
        hostname: 'https://www.tailine.online/',
        href: 'https://www.tailine.online/',
        host: 'https://www.tailine.online/',
        pathname: '/',
      },
    ],
    title: 'Tailine - Alongamento de fibra • Esmaltação em Gel • Manicure • Pedicure • Spa dos pés',
    url: 'https://www.tailine.online/',
    siteName: 'Tailine - Alongamento de fibra • Esmaltação em Gel • Manicure • Pedicure • Spa dos pés',
    description: 'Descubra os melhores tratamentos de beleza na Tailine: alongamento de fibra, esmaltação em gel, manicure, pedicure e spa dos pés. Agende sua sessão agora para uma experiência luxuosa de cuidado pessoal!',
    type: 'website',

  },
  twitter: {
    card: 'summary',
    title: 'Tailine - Alongamento de fibra • Esmaltação em Gel • Manicure • Pedicure • Spa dos pés',
    description: 'Descubra os melhores tratamentos de beleza na Tailine: alongamento de fibra, esmaltação em gel, manicure, pedicure e spa dos pés. Agende sua sessão agora para uma experiência luxuosa de cuidado pessoal!',
    site: 'https://www.pokelababc.com.br/',
    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-EQGZE76J8J" />
    </html>
  );
}
