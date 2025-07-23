import bannerPokemon from '../assets/BannerPokemon.png';
import './css/Banner.css';

const Banner = () => {
    return (
        <div id="elmBanner">
            <div>
                <img src={bannerPokemon} alt="Banner"/>
            </div>
        </div>
    )
};

export default Banner;