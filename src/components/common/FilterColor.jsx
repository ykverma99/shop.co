import React, { useState } from "react";

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

const FilterColor = ({ className = "grid-cols-5", h = "h-10", w = "w-10" }) => {
  const [selectedColor, setSelectedColor] = useState(
    Array.isArray(colors) && colors?.length > 0 ? colors[0] : ""
  );
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };
  return (
    <div className="flex items-center justify-center">
      <div className={`grid ${className}  gap-1 justify-center items-center`}>
        {colors?.map((color, index) => (
          <button
            key={index}
            className={`${h} ${w} rounded-full border-2 cursor-pointer 
                  ${
                    selectedColor === color ? "border-black" : "border-gray-200"
                  }
                  ${color === "#000000" ? " text-red-500" : ""}
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

export default FilterColor;
