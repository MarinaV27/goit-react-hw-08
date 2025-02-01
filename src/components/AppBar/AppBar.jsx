import css from './AppBar.module.css'
import Navigation from '../Navigation/Navigation'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import UserMenu from '../UserMenu/UserMenu'
import AuthNav from '../AuthNav/AuthNav'


export default function AppBar() {
    const isLoggedin = useSelector(selectIsLoggedIn);
    return (
        <div className={css.header}>
            <Navigation />
            {isLoggedin ? <UserMenu /> : <AuthNav />}
        </div>
    )
}