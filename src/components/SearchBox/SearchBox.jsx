import css from "./SearchBox.module.css"

export default function SearchBox ({ value, onFilter }) {
    return (
        <div>
            <p>Find contaccts by name</p>
            <input className={css.list}
            type="text" 
            value={value}
            onChange = {(event) => onFilter(event.target.value) 
            } />
        </div>
    )
}