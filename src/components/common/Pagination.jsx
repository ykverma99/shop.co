import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductCard from "./ProductCard";
import useFetch from "../../hooks/useFetch";

const Item_per_page = 9;

const Pagination = ({ colorId, styleId, sizeId }) => {
  console.log(colorId, styleId, sizeId);
  const [currentPage, setcurrentPage] = useState(1);
  const {
    data: productData,
    loading: loadingFeatured,
    error: errorFeatured,
  } = useFetch(
    `product?${colorId ? `colorId=${colorId}&` : ""}${
      styleId ? `styleId=${styleId}&` : ""
    }${sizeId ? `sizeId=${sizeId}` : ""}`
  );
  const totalPages = Math.ceil(productData?.data?.length / Item_per_page);

  const indexOfLastItem = currentPage * Item_per_page;
  const indexOfFirstItem = indexOfLastItem - Item_per_page;
  const currentItems = productData?.data?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setcurrentPage(newPage);
    }
  };

  if (loadingFeatured) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="w-full py-3">
      {!loadingFeatured && productData?.data?.length === 0 && (
        <p className="text-center text-gray-500 py-10">
          No products matched your filters.
        </p>
      )}
      <div className="grid grid-cols-3 gap-4">
        {currentItems &&
          currentItems.map((product) => (
            <ProductCard
              key={product.color._id}
              productName={product.productName}
              price={product.price}
              imgSrc={product?.color?.productImages[0]}
            />
          ))}
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        <button
          className={`px-4 py-2 border rounded-md cursor-pointer ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <IoIosArrowBack size={20} />
        </button>

        <span className="px-4 py-2 border rounded-md bg-gray-200">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className={`px-4 py-2 border rounded-md cursor-pointer ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <IoIosArrowForward size={20} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
