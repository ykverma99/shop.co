import React from "react";
import CategoryOptions from "../common/CategoryOptions";
import ProductCard from "../common/ProductCard";
import Button from "../common/Button";
import Container from "../common/Container";
import { Link } from "react-router-dom";

const CategorySection = ({
  label,
  buttonText,
  onButtonClick,
  title,
  data,
  button,
  onClick,
}) => {
  return (
    <Container>
      <CategoryOptions
        label={label}
        button={buttonText}
        onClick={onButtonClick}
        title={title}
      />
      <div className="flex flex-wrap items-center gap-5">
        {data.map((product) => {
          return (
            <ProductCard
              key={product._id}
              productName={product.productName}
              imgSrc={product?.color?.productImages[0]}
              price={product.price}
            />
          );
        })}
      </div>
      {!buttonText ? (
        <div className="flex justify-center my-10">
          <Link to={"/shop"}>
            <Button size="lg" onClick={onClick}>
              {button}
            </Button>
          </Link>
        </div>
      ) : null}
    </Container>
  );
};

export default CategorySection;
