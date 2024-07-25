import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductItem } from "./ProductItem";
import FilterPanel from "./FilterPanel";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    ratings: [],
    availability: [],
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data); // Initialize filtered products
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const handleFilterChange = (type, value) => {
    console.log(`Filter change: ${type} - ${value}`);
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (newFilters[type].includes(value)) {
        newFilters[type] = newFilters[type].filter((item) => item !== value);
      } else {
        newFilters[type] = [...newFilters[type], value];
      }
      console.log("Updated filters:", newFilters);
      return newFilters;
    });
  };

  useEffect(() => {
    console.log("Applying filters:", filters);
    let updatedProducts = [...products];

    // Apply category filter
    if (filters.categories.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    // Apply rating filter
    if (filters.ratings.length > 0) {
      updatedProducts = updatedProducts.filter((product) => {
        return filters.ratings.some((rating) => product.rating.rate >= rating);
      });
    }

    // Apply availability filter
    if (filters.availability.length > 0) {
      updatedProducts = updatedProducts.filter((product) => {
        if (filters.availability.includes("instock") && product.inStock) {
          return true;
        }
        if (filters.availability.includes("outstock") && !product.inStock) {
          return true;
        }
        return false;
      });
    }

    setFilteredProducts(updatedProducts);
    console.log("Filtered products:", updatedProducts);
  }, [filters, products]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex justify-between px-4 sm:px-6 lg:px-8 py-16 space-x-8">
      <div className="w-1/4">
        <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
      </div>
      <div className="flex-grow max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h4>Showing {filteredProducts.length} products</h4>
          <div className="flex items-center">
            <p className="mt-1 py-1 pr-3">Sort by:</p>
            <select
              className="px-3 py-2 border-gray-400"
              defaultValue="most-popular"
            >
              <option value="most-popular">Most popular</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
