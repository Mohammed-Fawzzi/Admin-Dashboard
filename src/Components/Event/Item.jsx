import React from "react";

const Item = ({ event }) => {
  return (
    <div className="flex items-center gap-5">
      <span className="bg-gray-300 text-gray-700 p-2 h-16 w-16 rounded-md font-bold text-center">{event.date}</span>
      <div>
        <h1 className="text-xl font-bold">{event.title}</h1>
        <p className="text-gray-400">{event.description}</p>
      </div>
    </div>
  );
};

export default Item;
