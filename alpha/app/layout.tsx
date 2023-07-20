import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import "@/public/styles/global.css";

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
        <Navbar />
        <section className="flex justify-center ">
          <main className="container w-[900px] px-3 md:px-0">
            <div className="min-h-[100vh]">{children}</div>
            <Footer />
          </main>
        </section>
      </body>
    </html>
  );
}
