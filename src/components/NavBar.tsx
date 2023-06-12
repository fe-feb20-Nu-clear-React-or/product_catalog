import {NavLink} from 'react-router-dom'
export const NavBar = () => {
    return (
        <>
            <NavLink to="/home" className="navbar__link">home</NavLink>
            <NavLink to="/phones" className="navbar__link">phones</NavLink>
            <NavLink to="/tablets" className="navbar__link">tablets</NavLink>
            <NavLink to="/accessories" className="navbar__link">accessories</NavLink>
        </>
    )
}