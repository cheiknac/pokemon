import logoPokemon from '../assets/Pokemon.png';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

const Navbar = () => {
    return (
        <div id="elmNavbar">
            <div>
            <img src={logoPokemon} alt="Logo Pokemon" />
            </div>
            <nav>
                <Link to="#">HOME</Link>
                <Link to="#">TYPES</Link>
                <Link to="#">TEAMS</Link>
                <Link to="#">ADD TEAM</Link>
            </nav>
        </div>
    )
}

export default Navbar;