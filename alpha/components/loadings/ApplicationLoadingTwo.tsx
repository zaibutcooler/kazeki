const ApplicationLoadingTwo = () => {
  const arr = ["", "", "", "", "", ""];

  return (
    <main>
      {arr.map((item, index) => (
        <div key={index}>
          {" "}
          <div className="mb-2 p-3 border rounded animate-pulse">
            <div className="w-full h-5 mb-2 bg-gray-100 rounded"></div>
            <div className="w-1/3 h-4 mb-2 bg-gray-100 rounded"></div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default ApplicationLoadingTwo;
