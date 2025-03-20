import React from "react";

const CategoryCard = ({ src, title }) => {
  return (
    <div className="w-40 h-36 flex flex-col justify-center border gap-2.5 items-center">
      <img src={src} alt="" className="object-contain h-16 w-16" />
      <p>{title}</p>
    </div>
  );
};

export default CategoryCard;
