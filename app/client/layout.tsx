export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <section className="flex justify-center md:justify-between ">
        <main className="container w-full md:w-[650px] px-3 md:px-0">
          <div className="min-h-[100vh]">{children}</div>
        </main>
        <main className="hidden md:block">Illustration</main>
      </section>
    </main>
  );
}
