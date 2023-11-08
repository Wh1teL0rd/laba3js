import banner from './../../img/Banner.png'
import './scss/Banner.scss'
import SliderDots from "./SliderDots";

const Banner = () => {
    return (
        <div className={'banner-wrapper'}>
            <div className="banner">
                <img src={banner} alt="" className="banner"/>
                <p className={'on-banner-text'}>
                Books are the mirrors of the soul
                </p>
            </div>
            <SliderDots/>
        </div>
    )
}

export default Banner