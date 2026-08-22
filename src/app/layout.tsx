import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({ 
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"] 
});

export const metadata: Metadata = {
  title: "Elizaveta Samokhovets | Content Producer",
  description: "SMM, UGC Creator, and Visual Identity Expert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${fredoka.className} bg-beige text-slate-900 antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}