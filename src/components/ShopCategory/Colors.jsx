import React, { useState } from "react";
import Title from "./Title";
import SelectColors from "../common/SelectColors";
import FilterColor from "../common/FilterColor";

const colors = [
  "#00C853",
  "#D50000",
  "#FFD600",
  "#FF6D00",
  "#00B8D4", // First row
  "#2962FF",
  "#8E24AA",
  "#EC407A",
  "#FFFFFF",
  "#000000", // Second row
];

const Colors = () => {
  const [isShow, setisShow] = useState(true);

  return (
    <div>
      <Title
        title={"Colors"}
        isShow={isShow}
        handleIsShow={() => setisShow(!isShow)}
      />
      {isShow && (
        <div className="pt-6 mb-6">
          <FilterColor />
        </div>
      )}
    </div>
  );
};

export default Colors;
