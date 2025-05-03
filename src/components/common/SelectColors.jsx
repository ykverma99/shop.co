import React from "react";

const SelectColors = React.memo(
  ({
    colors,
    className = "grid-cols-5",
    h = "h-10",
    w = "w-10",
    selectedColor,
    handleColorSelect,
  }) => {
    return (
      <div className="flex items-center justify-center">
        <div className={`grid ${className}  gap-1 justify-center items-center`}>
          {colors?.map((color, index) => (
            <button
              key={index}
              className={`${h} ${w} rounded-full border-2 cursor-pointer 
              ${
                selectedColor === color.hexCode
                  ? "border-black"
                  : "border-gray-200"
              }
                  text-cyan-500  flex items-center justify-center`}
              style={{ backgroundColor: color.hexCode }}
              onClick={() => handleColorSelect(color)}
            >
              {selectedColor?.hexCode === color.hexCode && "✓"}
            </button>
          ))}
        </div>
      </div>
    );
  }
);

export default SelectColors;
