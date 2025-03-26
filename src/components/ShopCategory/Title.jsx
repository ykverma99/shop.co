import React, { memo } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Title = ({ title, isShow, handleIsShow }) => {
  return (
    <div
      onClick={handleIsShow}
      className="flex items-center justify-between cursor-pointer py-3 border-b border-gray-400"
    >
      <h4 className="font-bold">{title}</h4>
      {isShow ? (
        <IoIosArrowUp
          size={20}
          className="cursor-pointer"
          onClick={handleIsShow}
        />
      ) : (
        <IoIosArrowDown size={20} className="cursor-pointer" />
      )}
    </div>
  );
};

export default memo(Title);
