import React, { useEffect, useState } from "react";

const ProductImage = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (Array.isArray(images) && images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [images]);

  if (!Array.isArray(images) || images.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        No image available
      </div>
    );
  }

  return (
    <div className="flex justify-end w-full h-[400px] gap-5 pr-4">
      <div className="flex flex-col w-[15%] gap-1.5 h-full">
        {images.slice(0, 4).map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(img)}
            className={`cursor-pointer h-full w-full rounded overflow-hidden  ${
              selectedImage === img ? "opacity-50" : ""
            }`}
          >
            <img
              src={img}
              alt={`thumbnail-${idx}`}
              className="h-full w-full object-cover aspect-square"
            />
          </div>
        ))}
      </div>
      <div className="w-[70%] h-full">
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-full object-cover aspect-square rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ProductImage;
