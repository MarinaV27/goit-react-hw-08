import css from './AppBar.module.css'



export default function AppBar() {
    return (
        <div className={css.header}>
            <Navigation />
        </div>
    )
}