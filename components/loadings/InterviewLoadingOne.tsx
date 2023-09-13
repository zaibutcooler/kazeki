import React from "react";
import InterviewLoadingTwo from "./InterviewLoadingTwo";

const InterviewLoadingOne = () => {
  const arr = ["", "", ""];

  return (
    <main>
      {arr.map((item, index) => (
        <div key={index}>
          {" "}
          <div className="mb-2 p-4 border rounded animate-pulse">
            <div className="w-full h-5 mb-2 bg-gray-100 rounded"></div>
            <InterviewLoadingTwo />
          </div>
        </div>
      ))}
    </main>
  );
};

export default InterviewLoadingOne;
