import React, { useState } from "react";
import Title from "./Title";

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
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };
  return (
    <div>
      <Title
        title={"Colors"}
        isShow={isShow}
        handleIsShow={() => setisShow(!isShow)}
      />
      {isShow && (
        <div className="flex items-center justify-center pt-5 mb-5">
          <div className="grid grid-cols-5 gap-2 justify-center items-center">
            {colors.map((color, index) => (
              <button
                key={index}
                className={`w-10 h-10 rounded-full border-2 
                ${selectedColor === color ? "border-black" : "border-gray-200"}
          ${selectedColor === "#000000" ? "text-white" : ""} 
          flex items-center justify-center`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelect(color)}
              >
                {selectedColor === color && "✓"}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Colors;
