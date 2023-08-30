const ApplicationLoadingOne = () => {
  const arr = ["", "", ""];

  return (
    <main>
      {arr.map((item, index) => (
        <div key={index}>
          {" "}
          <div className="mb-2 p-4 border rounded animate-pulse">
            <div className="w-full h-5 mb-2 bg-gray-100 rounded"></div>
            <div className="w-full h-4  bg-gray-100 rounded"></div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default ApplicationLoadingOne;
