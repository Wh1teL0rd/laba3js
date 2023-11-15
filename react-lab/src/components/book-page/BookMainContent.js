import './scss/BookMainContent.scss'
import {useLocation} from "react-router-dom";
import {SUMMARY} from '../../constants/contentConstants'
import BuyButton from "./BuyButton";

let initialBooks = [
    {
        id: 1,
        countOfPages: 432,
        author: "Stephen Hawking",
        title: "History of Time",
        description: "An informative book about cosmology. ",
        priceInUah: 47.75,
        image: 'https://imageupload.io/ib/7mTHIWBekeF79E0_1698918210.jpg'
    },
    {
        id: 2,
        countOfPages: 256,
        author: "George Orwell",
        title: "1984",
        description: "A captivating mystery that keeps you guessing until the end.",
        priceInUah: 37.75,
        image: 'https://imageupload.io/ib/N7s8HrIWhMVQhja_1698918446.jpg'
    },
    {
        id: 3,
        countOfPages: 235,
        author: "Andrzej Sapkowski",
        title: "The Witcher",
        description: "A thrilling adventure novel with twists and turns.",
        priceInUah: 50.00,
        image: 'https://imageupload.io/ib/W7snyzqPQ8MwuZn_1698918625.png'
    },
    {
        id: 4,
        countOfPages: 320,
        author: "Chuck Palahniuk",
        title: "Fight Club",
        description: "A thrilling adventure novel with twists and turns.",
        priceInUah: 36.00,
        image: 'https://imageupload.io/ib/4boIxl9as3AG916_1698918770.jpg'
    }

];

const BookMainContent = (props) => {
    return (
        <div className={'content-wrapper'}>
            <div className={'img-wrapper'}>
                <div className={'book-img-back'}>
                    <img src={props.bookData.image} alt={'book'}/>
                </div>
            </div>
            <div className={'information-wrapper'}>
                <div className={'information-header'}>
                    <div className={'author-title'}>
                        <h1>{props.bookData.title}</h1>
                        <h2>{props.bookData.author}</h2>
                    </div>
                </div>
                <div className={'description'}>
                    <h3> Summary </h3>
                    <p>
                        {props.bookData.description + SUMMARY}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BookMainContent