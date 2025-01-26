import css from './AppBar.module.css'
import Navigation from '../Navigation/Navigation'


export default function AppBar() {
    return (
        <div className={css.header}>
            <Navigation />
        </div>
    )
}