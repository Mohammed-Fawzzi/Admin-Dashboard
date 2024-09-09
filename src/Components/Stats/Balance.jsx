import React from "react";
import Title from "../../Ui/Title";
import { FiSend } from "react-icons/fi";
import BarChart from "./BarChart";

const Balance = ({darkMode}) => {
  return (
    <div className="bg-white dark:bg-gray-600 dark:text-gray-300 p-5 rounded-2xl flex-1">
      <div className="flex justify-between items-center">
        <Title>Balance</Title>
        <FiSend className="bg-gray-500 w-8 h-8 p-2 rounded-full text-gray-300" />
      </div>
      <div>
        <h1 className="font-bold text-2xl">
          $600,000 <span className="font-medium text-xl">(USD)</span>
        </h1>
        <span>On September 2024</span>
      </div>
      <BarChart darkMode={darkMode}/>
    </div>
  );
};

export default Balance;
