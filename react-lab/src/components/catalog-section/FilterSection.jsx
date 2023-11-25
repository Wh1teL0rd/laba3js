import React from "react";
import FilterBlock from "./FilterBlock";
import FilterIcon from "./FilterIcon";

const FilterSection = ({ open, sortBy, handleSortChange, openFilterWindow }) => {
  return (
    <div className={'filter-wrapper'}>
      <FilterBlock open={open} sortBy={sortBy} handleSortChange={handleSortChange} />
      <FilterIcon openFilterWindow={openFilterWindow} />
    </div>
  );
}

export default FilterSection;
