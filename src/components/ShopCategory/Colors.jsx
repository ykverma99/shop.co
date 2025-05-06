import React, { useState } from "react";
import Title from "./Title";
import FilterColor from "../common/FilterColor";

const Colors = ({ colors, selectedColor, handleColor }) => {
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
          <FilterColor
            colors={colors}
            selectedColor={selectedColor}
            handleColor={handleColor}
          />
        </div>
      )}
    </div>
  );
};

export default Colors;
