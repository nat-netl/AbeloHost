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
      <body>{children}</body>
    </html>
  );
}
