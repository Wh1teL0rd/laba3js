import './scss/BuyButton.scss';
import {useDispatch} from "react-redux";
import {actionsTypes} from "../../store/store";

const BuyButton = (props) => {
    const dispatch = useDispatch()
    function addItemToCart() {
        dispatch({
            type: actionsTypes.addToCart,
            bookToAdd: props.bookData
        })
    }

    return (
        <div className={'button-wrapper'}>
            <button className={'buy-button'}
                    onClick={addItemToCart}>
                {props.bookData.priceInUah + '$'}
                <p>
                    Add to cart
                </p>
            </button>
        </div>
    )
}

export default BuyButton