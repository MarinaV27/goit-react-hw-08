import { NavLink } from "react-router-dom"
import css from './Navigation.module.css'
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/auth/selectors"



export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <div>
            <nav>
                <ul className={css.list}>
                    <li>
                        <NavLink className={css.link} to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        {isLoggedIn && (
                        <NavLink className={css.link} to='/contacts'>
                            Contacts
                            </NavLink>
                            )}
                    </li>
                </ul>
            </nav>
        </div>
    )
}