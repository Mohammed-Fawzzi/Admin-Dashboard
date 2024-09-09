import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { shortcutLink } from "../../constants";
import Title from "../../Ui/Title";

const ShortCuts = () => {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-lg p-4 dark:bg-gray-600 shadow-md">
      <Title>Shortcuts</Title>

      {shortcutLink.map((list, index) => (
        <div
          key={index}
          className="flex justify-between items-center cursor-pointer rounded-sm"
        >
          <div className="flex items-center gap-4">
            <span className="bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center dark:bg-gray-800 dark:text-gray-300">
              <list.icon />
            </span>
            <h3 className="font-medium dark:text-gray-300">{list.title}</h3>
          </div>
          <span className="bg-gray-300 p-2 rounded-md dark:bg-gray-700 dark:text-gray-300 hover:mr-3 transition-all duration-500">
            <IoIosArrowForward />
          </span>
        </div>
      ))}
    </div>
  );
};

export default ShortCuts;
