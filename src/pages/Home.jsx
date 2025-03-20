import React from "react";
import MainBgImage from "../components/MainBgImage/MainBgImage";
import CategorySection from "../components/CategorySection/CategorySection";
import { FaStar, FaStarHalf } from "react-icons/fa";
import SelectCategory from "../components/SelectCategory/SelectCategory";

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
    </div>
  );
};

export default Home;
