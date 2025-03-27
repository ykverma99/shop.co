import React, { memo } from "react";

const Amount = ({ price, title, color }) => {
  return (
    <div className="flex justify-between w-full text-lg">
      <p className="text-gray-400">{title}</p>
      <p className={`font-bold ${color}`}>{price}</p>
    </div>
  );
};

export default memo(Amount);
