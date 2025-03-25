import React from "react";

const defaultStyles =
  "inline-flex justify-center items-center font-open rounded hover:brightness-[.96] hover:scale-[1.02] cursor-pointer active:-translate-y-0.5";

const varients = {
  fill: "bg-primary text-white border-0",
  outline: "border text-[#db4444] hover:border-red-400",
  flat: "border-0 text-[#db4444]",
};

const sizes = {
  sm: "text-xs h-8 w-20",
  md: "text-base h-12 w-36",
  lg: "text-lg font-semibold h-14 w-44",
};

const defaultElement = "button";
const Button = ({
  children,
  as,
  className,
  onClick,
  size = "md",
  varient = "fill",
  ...extraprops
}) => {
  let Component = as ?? defaultElement;
  return (
    <Component
      {...extraprops}
      className={`${defaultStyles} ${varients[varient]} ${sizes[size]} ${className}`}
    >
      {children}
    </Component>
  );
};

export default Button;
