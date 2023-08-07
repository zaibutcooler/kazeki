"use client";

const FreelanceHeaderCard = () => {
  const client = true;

  return (
    <div className="mb-2 mt-3 w-full rounded-md border p-3">
      {client === true ? (
        <main>
          <h1>Welcome back!</h1>
        </main>
      ) : (
        <main>
          <h1>Welcome back!</h1>
        </main>
      )}
    </div>
  );
};

export default FreelanceHeaderCard;
