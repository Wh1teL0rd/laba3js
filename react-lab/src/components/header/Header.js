import SearchInput from "./SearchInput";
import Navbar from "./Navbar.js";
import Title from './Title'
import './scss/Header.scss'

const Header = () => {
    return (
        <header className={'header-wrapper'}>
            <div className={"header"}>
                <Title/>
                <Navbar/>
                <SearchInput/>
            </div>
        </header>
    )
}

export default Header