import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tailine - Alongamento de fibra • Esmaltação em Gel • Manicure • Pedicure • Spa dos pés",
  description: "Encontre os melhores serviços de alongamento de fibra, esmaltação em gel, manicure, pedicure e spa dos pés na Tailine. Aprecie uma experiência de beleza e cuidado excepcionalmente luxuosa. Agende sua sessão agora!",
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
    description: 'Encontre os melhores serviços de alongamento de fibra, esmaltação em gel, manicure, pedicure e spa dos pés na Tailine. Aprecie uma experiência de beleza e cuidado excepcionalmente luxuosa. Agende sua sessão agora!',
    type: 'website',

  },
  twitter: {
    card: 'summary',
    title: 'Tailine - Alongamento de fibra • Esmaltação em Gel • Manicure • Pedicure • Spa dos pés',
    description: 'Encontre os melhores serviços de alongamento de fibra, esmaltação em gel, manicure, pedicure e spa dos pés na Tailine. Aprecie uma experiência de beleza e cuidado excepcionalmente luxuosa. Agende sua sessão agora!',
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
    </html>
  );
}
