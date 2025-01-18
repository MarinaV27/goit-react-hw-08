import { useDispatch, useSelector } from "react-redux"
import css from "./SearchBox.module.css"
import { changeFilter, selectNaneFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(selectNaneFilter);
    const handleChange = (event) => {
        dispatch(changeFilter(event.target.value))
    }
    return (
        <div>
            <p>Find contaccts by name</p>
            <input className={css.list}
            type="text" 
            value={filter}
            onChange={handleChange}
            />
        </div>
    )
}


