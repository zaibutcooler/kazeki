"use client";
import FreelanceOfferForm from "@/components/client/FreelanceOfferForm";
import JobOfferForm from "@/components/client/JobOfferForm";
import FreelanceApplicationForm from "@/components/freelancer/FreelanceApplicationForm";
import JobApplicationForm from "@/components/job-seeker/JobApplicationForm";
import { useState } from "react";

export default function HomePage() {
  const [formOne, setFormOne] = useState(false);
  const [formTwo, setFormTwo] = useState(false);
  const [formThree, setFormThree] = useState(false);
  const [formFour, setFormFour] = useState(false);

  return (
    <main>
      <button className="p-4 border" onClick={() => setFormOne(true)}>
        Freelance Application
      </button>
      <button className="p-4 border" onClick={() => setFormTwo(true)}>
        Freelance Offer
      </button>
      <button className="p-4 border" onClick={() => setFormThree(true)}>
        JobApplication
      </button>
      <button className="p-4 border" onClick={() => setFormFour(true)}>
        Job Offer
      </button>
      <div>
        {formOne && <FreelanceApplicationForm />}
        {formTwo && <FreelanceOfferForm />}
        {formThree && <JobApplicationForm />}
        {formFour && <JobOfferForm />}
      </div>
    </main>
  );
}
