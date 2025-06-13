import React from "react";

const Container = ({ children, disablePadding = false }) => {
  return (
    <div className="grid grid-cols-12 w-full">
      <div
        className={`col-span-12 lg:col-span-8 lg:col-start-3 ${
          !disablePadding && "p-10"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
