import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-noto",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "잊혀진 왕국: 코드의 유산",
  description: "Spring 백엔드를 스토리와 함께 배우는 선택지 RPG",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/icon-512.png",
  },
  openGraph: {
    title: "잊혀진 왕국: 코드의 유산",
    description: "Spring 백엔드를 스토리와 함께 배우는 선택지 RPG. 판타지 세계에서 Spring Boot, JPA, Security를 학습하세요!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "잊혀진 왕국: 코드의 유산",
      },
    ],
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "잊혀진 왕국: 코드의 유산",
    description: "Spring 백엔드를 스토리와 함께 배우는 선택지 RPG",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} antialiased`}>{children}</body>
    </html>
  );
}
