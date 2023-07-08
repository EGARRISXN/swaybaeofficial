import React from "react";
import Calendar from "../../components/Calendar";

export default function WhereToFindMe() {
  return (
    <div className="h-full w-full bg-gradient-to-tl from-base-100 to-base-200">
      <div className="flex flex-row items-center justify-center">
        <Calendar />
      </div>
    </div>
  );
}