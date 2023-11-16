import './scss/SearchInput.scss'
import {useState} from "react";

const SearchInput = (props) => {
    const [title, setTitle] = useState('');

    function readTitle(event) {
        setTitle(event.target.value)
        props.onReadTitle(event.target.value)
    }


    return (
        <div className={'search-container'}>
            <input type={"text"} placeholder={'Search'} onChange={readTitle} value={title}/>
        </div>
    )
}

export default SearchInput