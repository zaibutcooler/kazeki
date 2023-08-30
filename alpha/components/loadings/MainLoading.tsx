const MainLoading = () => {
  const arr = ["", "", "", "", "", "", "", ""];

  return (
    <main>
      {arr.map((item, index) => (
        <div key={index}>
          {" "}
          <div className="mb-2 p-4 border rounded animate-pulse">
            <section className="flex gap-6 mb-1">
              <div className="w-2/3 h-6 mb-3 bg-gray-100 rounded"></div>
              <div className="w-1/3 h-6 mb-3 bg-gray-100 rounded"></div>
            </section>
            <section className="flex justify-between gap-6">
              <div className="flex gap-4">
                <div className="w-[100px] h-6 mb-3 bg-gray-100 rounded"></div>
                <div className="w-[140px] h-6 mb-3 bg-gray-100 rounded"></div>
              </div>
              <div className="w-[80px] h-6 mb-3 bg-gray-100 rounded"></div>
            </section>
          </div>
        </div>
      ))}
    </main>
  );
};

export default MainLoading;
