import './scss/Footer.scss'
import logo from './../../img/Logo.png'
import SocialNetworks from "./SocialNetworks";

const Footer = () => {
    return (
        <footer className={'footer-container'}>
            <div className={'footer-content'}>
                <div className={'top-content'}>
                    <div className={'website-inform'}>
                        <h3>Wings</h3>
                        <p>A Wings is a store that sells books,
                            and where people can buy them.
                        </p>
                    </div>
                    <img className={'logo'} src={logo} alt={'Logo'}/>
                    <SocialNetworks/>
                </div>
                <hr/>
                <p className={'copyright'}>
                    2023 IoT Oleh Zeilyk React App © Copyright all rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer