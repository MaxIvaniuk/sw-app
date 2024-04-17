import type { Metadata } from "next";
import { montserrat } from "./ui/fonts";
import "./ui/globals.css";

export const metadata: Metadata = {
  title: "SW App",
  description: "Starwars API test app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={montserrat.className}>{children}</body>
      </html>
  );
}
