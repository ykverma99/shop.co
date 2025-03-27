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

const Size = () => {
  const [isShow, setisShow] = useState(true);

  return (
    <div className="mb-5">
      <Title
        title={"Filters"}
        isShow={isShow}
        handleIsShow={() => setisShow(!isShow)}
      />
      {isShow && (
        <div className="pt-5">
          <Sizes sizes={sizes} />
        </div>
      )}
    </div>
  );
};

export default Size;
