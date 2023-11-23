import './scss/BooksContainer.scss'
import BookCard from "./BookCard";
import SectionHeader from "./SectionHeader";
import {useEffect, useState} from "react";
import axios from "axios";
import {getAllBooksRequest} from "../../services/apiService";
import FancyLoader from "../utils-component/FancyLoader";

const BooksContainer = () => {
    const [fetchedBooks, setFetchedBooks] = useState([]);
    const [countOfShown, setCountOfShown] = useState(4);
    const [viewMore, setViewMore] = useState('View more')
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getAllBooksRequest().then((books) => {
            setFetchedBooks(books);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className={'books-container'}>
            <SectionHeader/>
            <div className="books">
                <div className="books-container">
                    {isLoading ? <FancyLoader/> : ''}
                    {fetchedBooks.slice(0, countOfShown).map((book) => (
                        <BookCard
                            key={book.id}
                            author={book.author}
                            title={book.title}
                            image={book.image}
                            priceInUah={book.priceInUah}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BooksContainer