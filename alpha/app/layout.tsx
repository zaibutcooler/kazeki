import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Sidebar from "./_components/Sidebar";
import "./global.css";

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
      <body className={inter.className}>
        <Navbar />
        <section className="container mx-auto">
          <main className="min-h-[100vh]">{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
