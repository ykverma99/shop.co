import React, { useCallback, useEffect, useState } from "react";
import ProductImage from "../components/Product_Page/ProductImage";
import Container from "../components/common/Container";
import ProductDetails from "../components/Product_Page/ProductDetails";
import CategoryOptions from "../components/common/CategoryOptions";
import ProductCard from "../components/common/ProductCard";
import { FaStar, FaStarHalf } from "react-icons/fa";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const Product = () => {
  const { name } = useParams();
  const query = `productName=${name}`;
  const { data, loading, error } = useFetch(`product/single`, query);
  const {
    data: demoData,
    loading: demoLoading,
    error: demoError,
  } = useFetch("product?limit=4");
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    const colorOptions = data?.data?.colors;
    if (Array.isArray(colorOptions) && colorOptions.length > 0) {
      setSelectedColor(colorOptions[0]);
    }
  }, [data]);
  const handleColorSelect = useCallback((color) => {
    setSelectedColor(color);
  });

  if (loading) {
    return <h1 className="text-7xl text-center">Loading...</h1>;
  }

  if (error || !data?.data) {
    return <h1 className="text-center text-red-500">Error loading product.</h1>;
  }
  return (
    <Container childClassName={"flex flex-col items-end"}>
      <div className="w-[97%] h-96 grid grid-cols-2 gap-1.5 my-20">
        <div className="h-96">
          <ProductImage images={selectedColor?.productImages || []} />
        </div>
        <div>
          <ProductDetails
            productData={data.data}
            selectedColor={selectedColor}
            handleColorSelect={handleColorSelect}
          />
        </div>
      </div>

      <div>
        <CategoryOptions label={"Related Products"} />
        <div className="grid grid-cols-4 gap-4">
          {demoData?.data?.map((product) => (
            <ProductCard
              key={product._id}
              productName={product.productName}
              price={product.price}
              imgSrc={product?.color?.productImages[0]}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Product;
