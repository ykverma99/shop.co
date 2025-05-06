import React, { useState } from "react";
import Title from "./Title";
import Sizes from "../common/Sizes";

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

const Size = ({ sizes, selectedSize, handleSize }) => {
  const [isShow, setisShow] = useState(true);

  return (
    <div className="mb-5">
      <Title
        title={"Sizes"}
        isShow={isShow}
        handleIsShow={() => setisShow(!isShow)}
      />
      {isShow && (
        <div className="pt-5">
          <Sizes
            selectedSize={selectedSize}
            sizes={sizes}
            handleSize={handleSize}
          />
        </div>
      )}
    </div>
  );
};

export default Size;
