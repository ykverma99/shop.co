import React, { useState } from "react";
import Title from "./Title";

const sizes = [
  "XX-Small",
  "X-small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
];

const Size = () => {
  const [isShow, setisShow] = useState(true);
  const [selectedSize, setselectedSize] = useState(sizes[3]);

  const handleSize = (text) => {
    setselectedSize(text);
  };
  return (
    <div className="mb-5">
      <Title
        title={"Filters"}
        isShow={isShow}
        handleIsShow={() => setisShow(!isShow)}
      />
      {isShow && (
        <div className="flex flex-wrap gap-2 pt-5">
          {sizes.map((text) => (
            <p
              key={text}
              className={`px-3 py-1.5 text-xs rounded-full cursor-pointer transition duration-200 ease-in-out ${
                text === selectedSize
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-400 "
              }`}
              onClick={() => handleSize(text)}
            >
              {text}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Size;
