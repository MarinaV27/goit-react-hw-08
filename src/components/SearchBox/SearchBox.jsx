import { useDispatch } from "react-redux"
import css from "./SearchBox.module.css"
import { changeFilter} from "../../redux/filtersSlice";

export default function SearchBox() {
    const dispatch = useDispatch();
    const handleChange = (event) => {
        dispatch(changeFilter(event.target.value))
    }
    return (
        <div>
            <p>Find contaccts by name</p>
            <input className={css.list}
            type="text" 
             placeholder="Заповніть поле пошуку"
            onChange={handleChange}
            />
        </div>
    )
}


