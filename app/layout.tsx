import type { Metadata } from "next";
import { Nunito, Rubik_Dirt } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const rubikDirt = Rubik_Dirt({
  variable: "--font-rubik-dirt",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christopher Moreira | Engenheiro de Software",
  description:
    "Currículo de Christopher Moreira, engenheiro de software com experiência em PHP, TypeScript, React, Laravel, Golang, MySQL e DevOps.",
  icons: {
    icon: "/web-app-manifest-512x512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${nunito.variable} ${rubikDirt.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
