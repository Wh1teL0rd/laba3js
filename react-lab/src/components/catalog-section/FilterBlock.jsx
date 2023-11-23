import React from 'react';
import './scss/CatalogHeader.scss'
const FilterBlock = ({open, filterObject, clearFilter, readInput, submitFilters, setSortOrder}) => {
    return (
        <div className={open ? 'filter-block' : 'filter-block hidden-element'}>
            <button className={'clear-filters'} type={'button'} onClick={clearFilter}>
                <span></span>
                <span></span>
            </button>
            <input
                type="number"
                value={filterObject['price']}
                onChange={(event) => {
                    readInput('price', event);
                }}
                placeholder={'Price'}
            />
            <input
                type="number"
                value={filterObject['pages']}
                onChange={(event) => {
                    readInput('pages', event);
                }}
                placeholder={'Count of pages'}
            />
            <input
                type={'text'}
                value={filterObject['author']}
                onChange={(event) => {
                    readInput('author', event);
                }}
                placeholder={'Author name'}
            />
            {/* Dropdown for sorting */}
            <select onChange={(e) => setSortOrder(e.target.value)}>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>
            <button type={'button'} className={'apply-filters'} onClick={submitFilters}>
                Apply
            </button>
        </div>
    );
};

export default FilterBlock;