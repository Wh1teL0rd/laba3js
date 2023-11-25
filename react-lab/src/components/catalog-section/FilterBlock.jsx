// FilterBlock.jsx
import React from "react";
import SortSelect from "./SortSelect"; // Імпорт компонента SortSelect

const FilterBlock = ({ open, sortBy, handleSortChange }) => {
  const filterInputs = [
    { type: 'number', placeholder: 'Price' },
    { type: 'number', placeholder: 'Count of pages' },
    { type: 'text', placeholder: 'Author name' },
  ];

  return (
    <div className={open ? 'filter-block' : 'filter-block hidden-element'}>
      {filterInputs.map((input, index) => (
        <input
          key={index}
          type={input.type}
          placeholder={input.placeholder}
        />
      ))}
      <SortSelect value={sortBy} onChange={handleSortChange} /> {/* Використовуємо SortSelect тут */}
      <button type={'button'} className={'apply-filters'}>
        Apply
      </button>
    </div>
  );
}

export default FilterBlock;
