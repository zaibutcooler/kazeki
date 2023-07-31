export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <section className="flex justify-center ">
        <main className="container w-[900px] px-3 md:px-0">
          <div className="min-h-[100vh]">{children}</div>
        </main>
      </section>
    </main>
  );
}
