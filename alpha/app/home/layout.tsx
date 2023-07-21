import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      <section className="flex justify-center ">
        <main className="container w-[900px] px-3 md:px-0">
          <div className="min-h-[100vh]">{children}</div>
          <Footer />
        </main>
      </section>
    </main>
  );
}
