
import ContactForm from "../ContactForm/CntactForm.jsx"
import SearchBox from "../SearchBox/SearchBox.jsx"
import ContactList from "../ContactList/ContactList.jsx"
import initialContacts from "../../contacts.json"
import { useState } from "react"


export default function App(){
    const [contacts, setContacts] = useState ([initialContacts]);
    return (
        <div>
           <h1>Phonebook</h1>
           <ContactForm />
           <SearchBox />
           <ContactList />
        </div>

    )
}


