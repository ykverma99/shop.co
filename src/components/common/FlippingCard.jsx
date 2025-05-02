import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import Button from "./Button";
import { Link } from "react-router-dom";

const FlippingCard = ({ imgSrc }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHover = () => setIsFlipped(!isFlipped);

  return (
    <div
      className="w-72 h-80 perspective-1000"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform shadow-lg rounded-2xl ${
          isFlipped ? "rotate-y-180 scale-105" : "scale-100"
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-gray-200 rounded-xl flex items-center justify-center text-black"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={imgSrc}
            alt=""
            className="h-full w-full object-center rounded-xl"
          />
        </div>

        {/* Back Side with Blur Effect */}
        <div
          className="
            absolute w-full h-full shadow-2xl
            rounded-xl text-white rotate-y-180 
             bg-black/50 backdrop-blur-md 
          "
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="bg-white float-end h-fit m-5 rounded-full  w-fit p-1">
            <IoIosHeartEmpty color="black" size={24} />
          </div>
          <div className="flex justify-center items-center h-full w-full ">
            <Link to={"/cart"}>
              <Button className={"shadow-md "}>Add to Cart</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
