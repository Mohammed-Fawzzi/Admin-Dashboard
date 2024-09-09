import React from "react";
import User from "./User";
import ShortCuts from "./ShortCuts";
import DonutChart from "./DonutChart";

const Profile = ({ darkMode }) => {
  return (
    <div className="px-2 py-4 bg-gray-200 rounded-lg w-full dark:bg-gray-700 lg:w-60 flex flex-col gap-4">
      <User />
      <ShortCuts />
      <DonutChart darkMode={darkMode} />

      <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-600 dark:text-gray-400">
        <h2 className="text-md font-bold mb-2">Additional Information</h2>
        <ul className="list-disc pl-5 lg:text-[12px] sm:text-[15px]">
          <li>1,245 units sold this month.</li>
          <li>358 users currently active.</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
