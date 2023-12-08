import styles from './scss/CartItem.module.scss';
import { useDispatch } from 'react-redux';
import { actionsTypes } from '../../store/store';
import close from './../../assets/close.png';
import minus from './../../assets/minus.png';
import plus from './../../assets/plus.png';

export const CartItem = (props) => {
    const dispatch = useDispatch();

    function deleteFromCart() {
        const confirmDelete = window.confirm('Are you sure you want to remove this item from the cart?');
        if (confirmDelete) {
            dispatch({
                type: actionsTypes.deleteFromCart,
                bookToDelete: props.book,
            });
        }
    }

    function addSameItem() {
        dispatch({
            type: actionsTypes.addSameItem,
            bookToUpdate: props.book,
        });
    }

    function deleteSameItem() {
        dispatch({
            type: actionsTypes.deleteSameItem,
            bookToUpdate: props.book,
        });
    }

    return (
        <div className={styles.cartItem}>
            <div className={styles.leftCorner}>
                <a href={`/book?id=${props.book.id}`}>
                    <img src={props.book.image} alt={'cart'} />
                </a>
                <div>
                    <a style={{ textDecoration: 'none' }} href={`/book?id=${props.book.id}`}>
                        <h3 style={{ wordBreak: 'break-all' }}>{props.book.title}</h3>
                    </a>
                    <p>{props.book.author}</p>
                </div>
            </div>
            <div className={styles.raiseButtons}>
                <button onClick={deleteSameItem}>
                    <img src={minus} alt={'minus'} />
                </button>
                <p>
                    <strong>{props.book.countOfSameBooks}</strong>
                </p>
                <button onClick={addSameItem}>
                    <img src={plus} alt={'plus'} />
                </button>
            </div>
            <div className={styles.rightCorner}>
                <p> {props.book.priceInUah + '$'}</p>
                <button onClick={deleteFromCart}>
                    <img src={close} alt={'delete'} />
                </button>
            </div>
        </div>
    );
};
