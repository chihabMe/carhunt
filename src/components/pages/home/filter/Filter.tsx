import React from "react";

const Filter = () => {
  return (
    <div className="flex items-center">
      <h1 className="capitalize text-title font-medium text-2xl">
        car catalogue
      </h1>

      <div className="flex gap-2 items-center">
        <input type="text" name="name" />
        <input type="text" name="model" />
      </div>
    </div>
  );
};

export default Filter;
