import SearchInput from "./SearchInput";
import Navbar from "./Navbar.js";
import Title from './Title'
import './scss/Header.scss'

const Header = (props) => {

    function passTitleUp(sendTitle) {
        props.onReadTitle(sendTitle);
    }

    return (
        <header className={'header-wrapper'}>
            <div className={"header"}>
                <Title/>
                <Navbar/>
                <SearchInput onReadTitle={passTitleUp} />
            </div>
        </header>
    )
}

export default Header