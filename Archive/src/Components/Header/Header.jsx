import { NavLink } from "react-router-dom"
import s from "./header.module.scss"

const Header = () => { 
    return( 
        <header className={s.header}>
            <p className={s.header_logo}>
                <NavLink to="/" className={s.header_logo_link}>ElectroShop</NavLink>
            </p>
            <nav className={s.header_nav}>
                <NavLink to="/" className={s.header_nav_item}>Main page</NavLink>
                <NavLink to="/users" className={s.header_nav_item}>Users</NavLink>
                <NavLink to="/basket" className={s.header_nav_item}>Basket</NavLink>
                <NavLink to="/signin" className={s.header_nav_item}>Sign in</NavLink>
                <NavLink to="/signup" className={s.header_nav_item}>Sign up</NavLink>
            </nav>
        </header>
    )
}

export default Header