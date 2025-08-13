import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { Metadata } from "next";

import "./../styles/global.scss";

export const metadata: Metadata = {
  title: "AbeloHost",
  description: "The best",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
