import React from "react";

const InforCircleIcon = ({ children, title, desc }) => {
  return (
    <div className="flex flex-col text-center justify-center items-center gap-2">
      <div className="w-20 h-20 rounded-full bg-zinc-500 flex justify-center items-center">
        <div className="h-[75%] w-[75%] rounded-full bg-black flex justify-center items-center">
          {children}
        </div>
      </div>
      <div>
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="text-xs">{desc}</p>
      </div>
    </div>
  );
};

export default InforCircleIcon;
