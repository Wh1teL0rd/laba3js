import React, { useState } from 'react';
import './scss/SectionHeader.scss';
import ViewMoreButton from './ViewMoreButton';

const SectionHeader = () => {
    const [showViewMore, setShowViewMore] = useState(false);

    const handleToggleViewMore = (isExpanded) => {
        setShowViewMore(isExpanded);
    };

    return (
        <div className={'books-header'}>
            <h2 className={'best-seller'}> Best Seller </h2>
            {showViewMore && <p>Some additional content goes here...</p>}
            <ViewMoreButton onToggle={handleToggleViewMore} />
        </div>
    );
};

export default SectionHeader;