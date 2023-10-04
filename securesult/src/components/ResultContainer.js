import React from "react";
import { useLocation } from "react-router-dom";

function ResultContainer() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="py-8 px-10">
      <h1 className="text-gray-700 text-4xl">Hello, user name</h1>
    </div>
  );
}

export default ResultContainer;
