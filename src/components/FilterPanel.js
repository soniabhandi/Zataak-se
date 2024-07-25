import React from "react";
import "./FilterPanel.css";

const FilterPanel = ({ filters, onFilterChange }) => {
  const handleCheckboxChange = (type, value) => {
    console.log(`Checkbox changed: ${type} - ${value}`);
    console.log("Current filters:", filters);
    onFilterChange(type, value);
  };

  return (
    <div className="bg-white p-4 rounded-lg">
      <div>
        <h3 className="mb-3 font-bold">CATEGORIES</h3>
        <ul className="space-y-2">
          <li className="mb-2">
            <input
              type="checkbox"
              id="men's clothing"
              onChange={() =>
                handleCheckboxChange("categories", "men's clothing")
              }
              checked={filters.categories.includes("men's clothing")}
            />
            <label htmlFor="men's clothing" className="ml-2">
              Mens
            </label>
          </li>
          <li className="mb-2">
            <input
              type="checkbox"
              id="jewelery"
              onChange={() => handleCheckboxChange("categories", "jewelery")}
              checked={filters.categories.includes("jewelery")}
            />
            <label htmlFor="jewelery" className="ml-2">
              Jewelery
            </label>
          </li>
          <li className="mb-2">
            <input
              type="checkbox"
              id="electronics"
              onChange={() => handleCheckboxChange("categories", "electronics")}
              checked={filters.categories.includes("electronics")}
            />
            <label htmlFor="electronics" className="ml-2">
              Electronics
            </label>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="font-bold mb-4">RATINGS</h3>
        <ul className="space-y-2">
          <li className="mb-2">
            <input
              type="checkbox"
              id="4-and-above"
              onChange={() => handleCheckboxChange("ratings", 4)}
              checked={filters.ratings.includes(4)}
            />
            <label htmlFor="4-and-above" className="ml-2">
              4 and above
            </label>
          </li>
          <li className="mb-2">
            <input
              type="checkbox"
              id="3-and-above"
              onChange={() => handleCheckboxChange("ratings", 3)}
              checked={filters.ratings.includes(3)}
            />
            <label htmlFor="3-and-above" className="ml-2">
              3 and above
            </label>
          </li>
          <li className="mb-2">
            <input
              type="checkbox"
              id="2-and-above"
              onChange={() => handleCheckboxChange("ratings", 2)}
              checked={filters.ratings.includes(2)}
            />
            <label htmlFor="2-and-above" className="ml-2">
              2 and above
            </label>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="font-bold mb-4">PRICE RANGE</h3>
        <input type="range" min="0" max="200" className="range-slider" />
        <div className=" flex justify-evenly price-range-labels ">
          <span>$0</span>
          <span>$200</span>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-bold mb-4">AVAILABILITY</h3>
        <ul className="space-y-2">
          <li className="mb-2">
            <input
              type="checkbox"
              id="instock"
              onChange={() => handleCheckboxChange("availability", "instock")}
              checked={filters.availability.includes("instock")}
            />
            <label htmlFor="instock" className="ml-2">
              In Stock
            </label>
          </li>
          <li className="mb-2">
            <input
              type="checkbox"
              id="outstock"
              onChange={() => handleCheckboxChange("availability", "outstock")}
              checked={filters.availability.includes("outstock")}
            />
            <label htmlFor="outstock" className="ml-2">
              Out of Stock
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterPanel;
