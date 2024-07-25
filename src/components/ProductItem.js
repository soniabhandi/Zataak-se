import React from "react";

export const ProductItem = ({ product }) => {
  return (
    <>
      <div className="bg-white">
        <div className="group relative">
          <div className=" flex overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-96 justify-center items-center">
            <img
              alt="Front of men&#039;s Basic Tee in black."
              src={product.image}
              className="object-center lg:h-42 lg:w-40"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <p className="mt-1 text-sm text-gray-500 ">{product.category}</p>
              <h3 className="text-sm text-black-700 font-bold">
                {product.title}
              </h3>
              <p className="text-sm font-medium text-gray-500">
                ${product.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
