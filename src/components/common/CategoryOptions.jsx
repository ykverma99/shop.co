import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const CategoryOptions = ({ label, title, button, onClick }) => {
  return (
    <div className="space-y-5 mb-10 mt-20">
      <div className="flex items-center gap-2">
        <div className="h-10 w-5 bg-primary rounded"></div>
        <p className="text-primary font-semibold text-lg  ">{label}</p>
      </div>

      <div className="flex justify-between items-start">
        <h2 className="text-3xl font-semibold">{title}</h2>
        {button && (
          <Link to={"/shop"}>
            <Button onClick={onClick}>{button}</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CategoryOptions;
