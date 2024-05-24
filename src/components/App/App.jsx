
import ContactForm from "../ContactForm/CntactForm.jsx"
import SearchBox from "../SearchBox/SearchBox.jsx"
import ContactList from "../ContactList/ContactList.jsx"
import initialContacts from "../../contacts.json"
import { useState } from "react"
import css from "./App.module.css"

export default function App(){
    const [contacts, setContacts] = useState ([initialContacts]);

    const addContact = (newContact) => {}


    return (
        <div className={css.container}>
           <h1>Phonebook</h1>
           <ContactForm onAdd={addContact} />
           <SearchBox />
           <ContactList contacts={contacts} />
        </div>

    )
}


