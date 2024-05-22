
import ContactForm from "../ContactForm/CntactForm.jsx"
import SearchBox from "../SearchBox/SearchBox.jsx"
import ContactList from "../ContactList/ContactList.jsx"
//import contacts from "../../contacts.json"

export default function App(){
    return (
        <div>
           <h1>Phonebook</h1>
           <ContactForm />
           <SearchBox />
           <ContactList />
        </div>

    )
}


