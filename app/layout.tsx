import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Hatso Dashboard',
    default: 'Hatso Dashboard',
  },
  description: '공식 Next.js Learn 과정에서 배포한 App Router.',
  icons: "/favicon.ico",
  openGraph: {
    title: "HatsoDB | HatsoDB App Router",
    description: "공식 Next.js Learn 과정에서 배포한 App Router.",
    url: "https://next-js-dashboard-tut-nine.vercel.app/",
    siteName: "HatsoDB project",
    images: [
      {
        url: "/favicon.ico", // OG 이미지 (공유 썸네일)
        width: 1200,
        height: 630,
        alt: "내 프로젝트 썸네일 이미지",
      },
    ],
    type: "website",
  },
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
