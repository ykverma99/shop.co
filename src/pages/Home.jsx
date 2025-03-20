import React from "react";
import MainBgImage from "../components/MainBgImage/MainBgImage";
import CategorySection from "../components/CategorySection/CategorySection";
import { FaStar, FaStarHalf } from "react-icons/fa";
import SelectCategory from "../components/SelectCategory/SelectCategory";
import BrowseByStyle from "../components/BrowseByStyle/BrowseByStyle";
import InforCircleIcon from "../components/common/InforCircleIcon";
import { TfiHeadphoneAlt, TfiTruck } from "react-icons/tfi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const demoData = [
  {
    id: 1,
    title: "The North Coat",
    image: "/coat.jpg",
    price: 260,
    rating: [
      <FaStar color="#FFC633" />,
      <FaStar color="#FFC633" />,
      <FaStar color="#FFC633" />,
      <FaStar color="#FFC633" />,
      <FaStarHalf color="#FFC633" />,
    ],
  },
  {
    id: 2,
    title: "Gucci Duffle Bag",
    image: "/bag.jpg",
    price: 960,
    rating: [
      <FaStar color="#FFC633" />,
      <FaStar color="#FFC633" />,
      <FaStar color="#FFC633" />,
      <FaStarHalf color="#FFC633" />,
      <FaStarHalf color="#FFC633" />,
    ],
  },
  {
    id: 3,
    title: "The North Coat",
    image: "/coat.jpg",
    price: 260,
    rating: [
      <FaStar color="#FFC633" />,
      <FaStar color="#FFC633" />,
      <FaStar color="#FFC633" />,
      <FaStar color="#FFC633" />,
      <FaStarHalf color="#FFC633" />,
    ],
  },
  {
    id: 4,
    title: "Gucci Duffle Bag",
    image: "/bag.jpg",
    price: 960,
    rating: [
      <FaStar color="#FFC633" />,
      <FaStar color="#FFC633" />,
      <FaStar color="#FFC633" />,
      <FaStarHalf color="#FFC633" />,
      <FaStarHalf color="#FFC633" />,
    ],
  },
];

const Home = () => {
  return (
    <div className="">
      <MainBgImage />
      <CategorySection
        data={demoData}
        label={"Today's"}
        title={"Flash Sales"}
        buttonText={"See All"}
      />
      <SelectCategory />
      <CategorySection
        data={demoData}
        label={"Today's"}
        title={"Flash Sales"}
        button={"See all"}
      />
      <BrowseByStyle />
      <div className="flex items-center justify-center gap-52 my-20">
        <InforCircleIcon
          title="Free and Fast Delivery"
          desc={"Free delivery for all orders over $140"}
        >
          <TfiTruck size={28} color="white" />
        </InforCircleIcon>
        <InforCircleIcon
          title={"24/7 CUSTOMER SERVICE"}
          desc={"Friendly 24/7 customer support"}
        >
          <TfiHeadphoneAlt size={28} color="white" />
        </InforCircleIcon>
        <InforCircleIcon
          title={"MONEY BACK GUARANTEE"}
          desc={"We reurn money within 30 days"}
        >
          <IoShieldCheckmarkOutline size={28} color="white" />
        </InforCircleIcon>
      </div>
    </div>
  );
};

export default Home;
