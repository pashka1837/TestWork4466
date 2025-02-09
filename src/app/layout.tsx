import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import { BootstrapClient } from "@/Components/Theme/Bootstrap";
import { Navbar } from "@/Components/Navbar/Navbar";
import { FavStoreProvider } from "@/Components/FavStoreProvider/FavStoreProvider";

export const metadata: Metadata = {
  title: "Weather App",
  description: "Search weather with weather app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <BootstrapClient />
        <FavStoreProvider>{children}</FavStoreProvider>
      </body>
    </html>
  );
}
