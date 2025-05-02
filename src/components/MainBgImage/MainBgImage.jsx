import React from "react";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const MainBgImage = () => {
  return (
    <div className="main-bg w-full h-[763px] flex items-center">
      {/* main info part */}
      <div className="w-[60%] flex justify-center">
        <div className="max-w-xl space-y-10">
          <h1 className="text-7xl tracking-wide font-bold">
            Find Clothes that matches your style
          </h1>
          <p className="text-sm pr-10">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link to={"/shop"}>
            <Button size="lg">Shop Now</Button>
          </Link>
        </div>
      </div>

      {/* <img
    src={BgMain}
    alt=""
    className="w-full h-full object-cover aspect-auto"
  /> */}
    </div>
  );
};

export default MainBgImage;
