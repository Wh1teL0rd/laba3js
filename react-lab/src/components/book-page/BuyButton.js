import React, { useState } from 'react';
import './scss/BuyButton.scss';
import { useDispatch } from 'react-redux';
import { actionsTypes } from '../../store/store';

const BuyButton = (props) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    function addItemToCart() {
        const confirmAdd = window.confirm(`Are you sure you want to add ${quantity} ${quantity > 1 ? 'items' : 'item'} to the cart?`);

        if (confirmAdd) {
            for (let i = 0; i < quantity; i++) {
                dispatch({
                    type: actionsTypes.addToCart,
                    bookToAdd: props.bookData
                });
            }
            setQuantity(1);
        }
    }

    return (
        <div className={'button-wrapper'}>
            <div className="quantity-input">
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
                    min="1"
                    style={{
                        width: '50px',
                        padding: '5px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        marginRight: '2rem',
                        height:'45px',
                        fontSize: '30px'
                    }}
                />
            </div>
            <button className={'buy-button'} onClick={addItemToCart}>
                {props.bookData.priceInUah + '$'}
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default BuyButton;
