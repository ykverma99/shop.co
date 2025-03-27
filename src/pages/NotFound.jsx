import React from "react";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-10">
      <h1 className="text-9xl font-semibold">404 Not Found</h1>
      <p className="text-xl">
        You Visited Page not found. You may go to Home Page.
      </p>
      <Button size="lg" className={"w-56"} onClick={() => navigate("/")}>
        Back to home page
      </Button>
    </div>
  );
};

export default NotFound;
