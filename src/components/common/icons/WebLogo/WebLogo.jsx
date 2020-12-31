import LogoHome from '../../../../assets/img/logo.png';
import './weblogo.styles.components.css';
import { NavLink } from "react-router-dom";

const WebLogo = () => {
    return (
        <>
            <NavLink to="/" exact>
                <img src={LogoHome} alt="Logo del sitio" className="img-fluid logoNav" />
            </NavLink>
        </>
    )
}

export default WebLogo;