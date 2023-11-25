import "./scss/CatalogHeader.scss"
import React, { useState } from "react";
import FilterBlock from "./FilterBlock";
import FilterIcon from "./FilterIcon";
import FilterSection from "./FilterSection";

const CatalogHeader = () => {
  const [open, setOpen] = useState(false);
  const [sortBy, setSortBy] = useState("default");

  function openFilterWindow() {
    setOpen(!open);
  }

  function handleSortChange(event) {
    setSortBy(event.target.value);
  }

  return (
    <div className={'catalog-header'}>
      <h2 className={'title'}> Full catalog </h2>
      <FilterSection
        open={open}
        sortBy={sortBy}
        handleSortChange={handleSortChange}
        openFilterWindow={openFilterWindow}
      />
    </div>
  );
}

export default CatalogHeader;
