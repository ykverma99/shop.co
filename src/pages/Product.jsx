import React, { useState } from "react";
import ProductImage from "../components/Product_Page/ProductImage";
import Container from "../components/common/Container";
import ProductDetails from "../components/Product_Page/ProductDetails";
import CategoryOptions from "../components/common/CategoryOptions";
import ProductCard from "../components/common/ProductCard";
import { FaStar, FaStarHalf } from "react-icons/fa";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

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
      <FaStar color="#FFC633" />,
      <FaStarHalf color="#FFC633" />,
    ],
  },
];

const Product = () => {
  const { name } = useParams();
  const query = `productName=${name}`;
  const { data, loading, error } = useFetch(`product/single`, query);
  // console.log(data?.data);
  const [selectedColor, setSelectedColor] = useState(
    Array.isArray(data?.data?.colors) && data?.data?.colors?.length > 0
      ? data?.data?.colors[0]?.hexCode
      : ""
  );
  console.log(selectedColor);
  return (
    <Container childClassName={"flex flex-col items-end"}>
      <div className="w-[97%] h-96 grid grid-cols-2 gap-1.5 my-20 space-y-8">
        <div className="h-96">
          <ProductImage images={data?.data?.colors} />
        </div>
        <div className="">
          <ProductDetails productData={data?.data} />
        </div>
      </div>
      <div>
        <CategoryOptions label={"Related Products"} />
        <div className="grid grid-cols-4 gap-4">
          {demoData.map((elm) => (
            <ProductCard
              key={elm.id}
              productName={elm.title}
              price={elm.price}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Product;
