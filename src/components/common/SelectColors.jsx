import React, { useState } from "react";

const SelectColors = ({
  colors,
  className = "grid-cols-5",
  h = "h-10",
  w = "w-10",
}) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };
  return (
    <div className="flex items-center justify-center">
      <div className={`grid ${className}  gap-1 justify-center items-center`}>
        {colors.map((color, index) => (
          <button
            key={index}
            className={`${h} ${w} rounded-full border-2 cursor-pointer 
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
  );
};

export default SelectColors;
