// import type { Metadata } from "next";
// import { Fredoka } from "next/font/google";
// import "./globals.css";

// const fredoka = Fredoka({ 
//   subsets: ["latin"], // Убрали cyrillic
//   weight: ["300", "400", "500", "600", "700"],
//   display: 'swap',
// });

// export const metadata: Metadata = {
//   title: "Elizaveta Samokhovets | Content Producer",
//   description: "SMM, UGC Creator, and Visual Identity Expert",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="ru">
//       <body className={`${fredoka.className} bg-beige text-slate-900 antialiased overflow-x-hidden`}>
//         {children}
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Montserrat, Satisfy } from "next/font/google"; 
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700", "900"],
  variable: '--font-montserrat',
});

const satisfy = Satisfy({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-accent',
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
      <body className={`${montserrat.variable} ${satisfy.variable} font-sans bg-beige text-slate-900 antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}