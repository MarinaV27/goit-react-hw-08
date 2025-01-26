
import ContactForm from "../ContactForm/ContactForm.jsx"
import SearchBox from "../SearchBox/SearchBox.jsx"
import ContactList from "../ContactList/ContactList.jsx"
import css from "./App.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchContacts } from "../../redux/contacts/operations.js"
import { selectError, selectLoading } from "../../redux/contacts/selectors.js"


export default function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const error = useSelector(selectError)
    const loading = useSelector(selectLoading)

    return (
        <div className={css.container}>
           <h1>Phonebook</h1>
           <ContactForm />
           <SearchBox />
            <ContactList />
            {error && <h2>Щось пішло не так</h2>}
            {loading && <h2>Loading...</h2> }
        </div>

    )
}

