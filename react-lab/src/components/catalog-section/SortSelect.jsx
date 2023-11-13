// SortSelect.jsx
import React from "react";

const SortSelect = ({ value, onChange }) => {
  return (
    <select id="sort-select" value={value} onChange={onChange}>
      <option value="default">Default</option>
      <option value="lowToHigh">Price: Low to High</option>
      <option value="highToLow">Price: High to Low</option>
    </select>
  );
};

export default SortSelect;
