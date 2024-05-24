import Contact from "../Contact/Contact.jsx"
import css from "./ContactList.module.css"

export default function ContactList ({contacts}) {
    return (
      <ul className={css.list}>
      {contacts.map((contact) => (
         <li className={css.item} key={contact.id}>
            <Contact data={contact} />
         </li>
      ))}  
      </ul> 

    );
}