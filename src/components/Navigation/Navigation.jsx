import { NavLink } from "react-router-dom"
import css from './Navigation.module.css'



export default function Navigation() {
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
                        <NavLink className={css.link} to='/contacts'>
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}