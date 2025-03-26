import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductCard from "./ProductCard";

const Item_per_page = 9;

const Pagination = ({ productData }) => {
  const [currentPage, setcurrentPage] = useState(1);

  const totalPages = Math.ceil(productData.length / Item_per_page);

  const indexOfLastItem = currentPage * Item_per_page;
  const indexOfFirstItem = indexOfLastItem - Item_per_page;
  const currentItems = productData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setcurrentPage(newPage);
    }
  };

  return (
    <div className="w-full py-3">
      <div className="grid grid-cols-3 gap-4">
        {currentItems.map((product) => (
          <ProductCard
            key={product.id}
            productName={product.title}
            price={product.price}
            rating={product.rating}
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
