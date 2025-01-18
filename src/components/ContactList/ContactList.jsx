import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx"
import css from "./ContactList.module.css"
import { selectContacts } from "../../redux/contactsSlice.js";
import { selectNaneFilter } from "../../redux/filtersSlice.js";


export default function ContactList() {
   const contacts = useSelector(selectContacts);
   const filters = useSelector(selectNaneFilter); 

   const visibleContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters.toLowerCase())); 
    return (
      
      <ul className={css.list}>
             {visibleContact.map((contact) => {
                (
                   <li className={css.item} >
                      <Contact key={contact.id} {...contact} />
                   </li>
                )
             })}  
      </ul> 
   

    );
}
