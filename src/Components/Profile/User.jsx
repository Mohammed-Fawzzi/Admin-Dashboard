import React from "react";
import userLogo from "../../assets/Admin.webp";
const User = () => {
  return (
    <div className="flex gap-3 items-center bg-white p-2 rounded-lg dark:bg-gray-600 dark:text-gray-300 shadow-md">
      <img src={userLogo} alt="User-logo" className="w-14 h-14 rounded-full" />
      <div>
        <h3 className="font-semibold text-2xl">Alex Smith</h3>
        <p>Administrator</p>
      </div>
    </div>
  );
};

export default User;
