import React, { useState } from "react";
import Container from "../common/Container";
import CategoryCard from "../common/CategoryCard";
import CategoryOptions from "../common/CategoryOptions";

const categoryData = [
  {
    id: 1,
    icon: "/images/shirt.svg",
    name: "Shirt",
  },
  {
    id: 2,
    icon: "/images/tshirt.svg",
    name: "T-shirt",
  },
  {
    id: 3,
    icon: "/images/jeans.svg",
    name: "Jeans",
  },
  {
    id: 4,
    icon: "/images/hood.svg",
    name: "Hoody",
  },
  {
    id: 5,
    icon: "/images/jacket.svg",
    name: "Jacket",
  },
  {
    id: 6,
    icon: "/images/pants.svg",
    name: "Cargo Pant",
  },
];

const SelectCategory = () => {
  const [activeCategory, setactiveCategory] = useState(1);

  const handleIsActive = (id) => {
    setactiveCategory(id);
  };
  return (
    <Container>
      <CategoryOptions label={"Categories"} title={"Browse By Category"} />
      <div className="flex items-center justify-center gap-5">
        {categoryData.map((elm) => (
          <CategoryCard
            key={elm.id}
            src={elm.icon}
            title={elm.name}
            onClick={() => handleIsActive(elm.id)}
            isActive={activeCategory === elm.id}
          />
        ))}
      </div>
    </Container>
  );
};

export default SelectCategory;
