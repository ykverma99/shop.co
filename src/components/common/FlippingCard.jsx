import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import Button from "./Button";
import BgImg from "../../assets/bg-main.png";

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHover = () => setIsFlipped(!isFlipped);
  console.log("flip");

  return (
    <div
      className="w-[350px] h-96 perspective-1000"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-gray-200 rounded-xl flex items-center justify-center text-black"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={BgImg}
            alt=""
            className="h-full w-full object-cover rounded-xl"
          />
        </div>

        {/* Back Side with Blur Effect */}
        <div
          className="
            absolute w-full h-full 
            rounded-xl text-white rotate-y-180 
             bg-black/50 backdrop-blur-md shadow-lg cursor-pointer
          "
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="bg-white float-end h-fit m-5 rounded-full  w-fit p-1">
            <IoIosHeartEmpty color="black" size={24} />
          </div>
          <div className="flex justify-center items-center h-full w-full ">
            <Button className={"shadow-md "}>Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
