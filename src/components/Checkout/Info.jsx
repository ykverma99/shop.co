import React from "react";

const Info = ({ tag, price }) => {
  return (
    <div className="flex justify-between items-center">
      <p>{tag}</p>
      <p>&#8377; {price}</p>
    </div>
  );
};

export default Info;
