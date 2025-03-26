import React, { memo } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Text = ({ text, to = "#" }) => {
  return (
    <Link to={to} className="flex items-center justify-between pt-2 ">
      <p className="text-sm text-gray-500">{text}</p>
      <IoIosArrowUp className="rotate-90 text-gray-500" size={14} />
    </Link>
  );
};

export default memo(Text);
