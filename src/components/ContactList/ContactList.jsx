import Contact from "../Contact/Contact.jsx"
import css from "./ContactList.module.css"


export default function ContactList ({contacts, onDelete}) {
    return (
      <div>
      <ul className={css.list}>
      {contacts.map((contact) => (
         <li className={css.item} key={contact.id}>
            <Contact data={contact} onDelete={onDelete} />
         </li>
      ))}  
      </ul> 
      </div>

    );
}