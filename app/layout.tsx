import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Online Creative Writing",
  description: "The premier destination for writers to craft stories, receive expert feedback, and join global challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
