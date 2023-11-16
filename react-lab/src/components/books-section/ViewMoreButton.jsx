import React, { useState } from 'react';
import './scss/ViewMoreButton.scss';

const ViewMoreButton = ({ onToggle }) => {
    const [isExpanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!isExpanded);
        onToggle(!isExpanded);
    };

    return (
        <a className={'view-all'} onClick={handleClick}>
            {isExpanded ? 'View Less' : 'View More'}
        </a>
    );
};

export default ViewMoreButton;