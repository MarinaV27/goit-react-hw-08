
import ContactForm from "../ContactForm/ContactForm.jsx"
import SearchBox from "../SearchBox/SearchBox.jsx"
import ContactList from "../ContactList/ContactList.jsx"
import initialContacts from "../../contacts.json"
import { useState, useEffect } from "react"
import css from "./App.module.css"


export default function App(){
    const [contacts, setContacts] = useState (() => {
        const savedContacts = localStorage.getItem("contact");
        return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
    })
      
    const [filter, setFilter] = useState ("");

    useEffect(() => {
        localStorage.setItem("contact", JSON.stringify(contacts))
    }, [contacts]);

    const addContact = (newContact) => {
        setContacts ((prevContacts) => {
            return [...prevContacts, newContact]
        });
    };

    const deleteContact = (contactId) => {
        setContacts ((prevContacts) => {
            return prevContacts.filter( (contact) => contact.id !== contactId )
        });
    };

    const visibleContact = contacts.filter((contact) => 
        contact.name.toLowerCase().includes(filter.toLowerCase()) )


    return (
        <div className={css.container}>
           <h1>Phonebook</h1>
           <ContactForm onAdd={addContact} />
           <SearchBox value={filter} onFilter={setFilter} />
           <ContactList contacts={visibleContact} onDelete={deleteContact} />
        </div>

    )
}


