// FilterProduct.js
import React from 'react';

const FilterProduct = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 border rounded ${
        isActive ? 'bg-blue-500 text-white' : 'bg-white text-black'
      }`}
    >
      {category}
    </button>
  );
};

export default FilterProduct;
