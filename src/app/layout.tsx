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
import { DynaPuff } from "next/font/google"; // Заменили на DynaPuff
import "./globals.css";

const dynaPuff = DynaPuff({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
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
      <body className={`${dynaPuff.className} bg-beige text-slate-900 antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}