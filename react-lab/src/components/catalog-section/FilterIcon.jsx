import React from "react";

const FilterIcon = ({ openFilterWindow }) => {
  return (
    <div onClick={openFilterWindow} className={'filter-icon'}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default FilterIcon;
