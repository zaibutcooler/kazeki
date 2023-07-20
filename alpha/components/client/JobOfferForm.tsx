"use client";
import React from "react";

const JobOfferForm = () => {
  return (
    <form className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700">
          Job Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
          placeholder="Enter the job title"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700">
          Job Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows="4"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
          placeholder="Enter the job description"
        />
      </div>

      {/* Add more form fields as per your requirements, e.g., requirements, salary, etc. */}

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </div>
    </form>
  );
};

export default JobOfferForm;
