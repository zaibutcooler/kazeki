import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import LandingFooter from "@/components/landing/sections/LandingFooter";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <section className="flex justify-center mt-12 ">
        <main className="container w-[640px] border px-3 md:px-0">
          <div className="min-h-[100vh] px-4">{children}</div>
        </main>
      </section>
      <LandingFooter />
    </main>
  );
}
