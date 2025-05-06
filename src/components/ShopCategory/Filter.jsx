import React, { useState } from "react";
import Title from "./Title";
import Text from "./Text";

const Filter = ({ selectedStyle, styles, handleStyle }) => {
  const [isShow, setisShow] = useState(true);
  return (
    <div>
      <Title
        title={"Styles"}
        isShow={isShow}
        handleIsShow={() => setisShow(!isShow)}
      />
      {isShow && (
        <div className="mb-5">
          {styles?.map((text) => (
            <p
              className={`text-sm pt-2 cursor-pointer ${
                text.name === selectedStyle?.name
                  ? "text-black font-semibold"
                  : "text-gray-500"
              }`}
              key={text._id}
              onClick={() => handleStyle(text)}
            >
              {text.name}{" "}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
