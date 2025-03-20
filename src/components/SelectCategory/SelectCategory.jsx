import React from "react";
import Container from "../common/Container";
import CategoryCard from "../common/CategoryCard";

const categoryData = [
  {
    id: 1,
    icon: "/images/shirt.png",
    name: "Shirt",
  },
  {
    id: 2,
    icon: "/images/tshirt.png",
    name: "T-shirt",
  },
  {
    id: 3,
    icon: "/images/jeans.png",
    name: "Jeans",
  },
  {
    id: 4,
    icon: "/images/hood.png",
    name: "Hoody",
  },
  {
    id: 5,
    icon: "/images/jacket.png",
    name: "Jacket",
  },
  {
    id: 6,
    icon: "/images/pant.png",
    name: "Cargo Pant",
  },
];

const SelectCategory = () => {
  return (
    <Container>
      <div className="flex ">
        {categoryData.map((elm) => (
          <CategoryCard src={elm.icon} title={elm.name} />
        ))}
      </div>
    </Container>
  );
};

export default SelectCategory;
