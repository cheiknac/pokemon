import bannerPokemon from '../assets/BannerPokemon.png';
import './css/Banner.css';

const Banner = () => {
    return (
        <div id="elmBanner">
            <img src={bannerPokemon} alt="Banner"/>
        </div>
    )
};

export default Banner;