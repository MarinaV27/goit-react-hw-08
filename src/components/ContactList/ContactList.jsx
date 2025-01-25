import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx"
import css from "./ContactList.module.css"
import { selectFilteredContacts } from "../../redux/contactsSlice.js";
//import { selectNaneFilter } from "../../redux/filtersSlice.js";
//import { use } from "react";


export default function ContactList() {
   const contacts = useSelector(selectFilteredContacts)
   //const contacts = useSelector(selectContacts);
   //const filter = useSelector(selectNaneFilter); 

   //const visibleContact = contacts.filter(contact =>
   //   contact.name.toLowerCase().includes(filter.toLowerCase())); 
    return (
      
     <ul className={css.list}>
             {contacts.map((contact) => {
                
                  return <li className={css.item} key={contact.id}>
                      <Contact  {...contact} />
                   </li>
                
             })}  
      </ul> 

    );
}


