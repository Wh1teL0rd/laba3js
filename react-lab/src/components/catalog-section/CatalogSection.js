import './scss/CatalogSection.scss'
import CatalogBookCard from "./CatalogBookCard";
import CatalogHeader from "./CatalogHeader";

let fetchedBooks = [
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

const CatalogSection = () => {
    return (
        <div className={'books-container'}>
            <CatalogHeader/>
            <div className={'catalog'}>
                {
                    fetchedBooks.map(book => (
                        <CatalogBookCard
                            key={book.id}
                            title={book.title}
                            author={book.author}
                            priceInUah={book.priceInUah}
                            countOfPages={book.countOfPages}
                            image={book.image}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default CatalogSection