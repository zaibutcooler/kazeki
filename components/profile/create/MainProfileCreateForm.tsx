"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { signIn } from "next-auth/react";
import Ask from "./Ask";
import ClientCreateForm from "./ClientCreateForm";
import SeekerCreateForm from "./SeekerCreateForm";

const MainProfileCreateForm = () => {
  const [displayedForm, setDisplayedForm] = useState("ask");

  const render = () => {
    switch (displayedForm) {
      case "ask":
        return (
          <Ask
            chooseClient={() => setDisplayedForm("client")}
            chooseSeeker={() => setDisplayedForm("seeker")}
          />
        );
      case "client":
        return <ClientCreateForm />;
      case "seeker":
        return <SeekerCreateForm />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Link href="/" className="fixed left-0 top-0 font-bold p-4">
        <AiOutlineArrowLeft />
      </Link>
      <main>{render()}</main>
    </div>
  );
};

export default MainProfileCreateForm;
