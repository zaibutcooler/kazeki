import React, { useState } from "react";

interface Props {}

const ClientCreateForm: React.FC<Props> = ({}) => {
  const [section, setSection] = useState(1);

  const showSection = () => {
    switch (section) {
      case 1:
        return <>One</>;
      case 2:
        return <>Two</>;
      case 3:
        return <>Three</>;
      case 4:
        return <>Four</>;
    }
  };

  return (
    <div className="md:w-[500px] lg:w-[600px] min-h-[400px] w-[350px] px-8 pt-6 bg-white shadow-md mx-3">
      <h1 className="font-semibold">Create Your Client Account</h1>
      <div>{showSection()}</div>
      <div className="w-full flex justify-between font-semibold">
        {section === 1 ? (
          <button>Go Back</button>
        ) : (
          <button onClick={() => setSection(section - 1)}>Back</button>
        )}
        {section === 4 ? (
          <button>Finish</button>
        ) : (
          <button className="" onClick={() => setSection(section + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ClientCreateForm;
