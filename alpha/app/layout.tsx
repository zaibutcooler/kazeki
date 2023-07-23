import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import "@/public/styles/global.css";
import Providers from "@/components/main/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kazeki",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
