import { Link } from 'react-router-dom';
import './css/RoofTop.css';

const RoofTop = () => {
    return (
        <div id='topBar'>
            <button className='bSignup'><Link style={{color: "#3B5CA8"}} to="/signup">Sign up</Link></button>
            <button className='bConexion'><Link style={{color: "#fff"}} to="/signup">Connexion</Link></button>
        </div>
    )
}

export default RoofTop;