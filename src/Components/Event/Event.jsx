import React from "react";
import Title from "../../Ui/Title";
import { events } from "../../constants";
import Item from "./Item";

const Event = () => {
  return (
    <div className="bg-white p-5 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex flex-col flex-1 gap-5">
      <Title>Events</Title>
      {events.map((event, index) => (
        <Item key={index} event={event} />
      ))}
    </div>
  );
};

export default Event;
