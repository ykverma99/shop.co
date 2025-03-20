import React from "react";

const Container = ({ children, parentClassName, childClassName }) => {
  return (
    <div className={`flex justify-center ${parentClassName}`}>
      <div className={`w-[80%] ${childClassName}`}>{children}</div>
    </div>
  );
};

export default Container;
