import css from "./Contact.module.css"
import { FaUser } from "react-icons/fa6";
import { MdCall } from "react-icons/md";

export default function Contact ({ data: {id, name, number}, onDelete}) {
    return (
        <div className={css.container}> 
            <div className={css.contact}>
               <p className={css.text}><FaUser />  {name}</p>
               <p className={css.text}><MdCall />  {number}</p>
            </div>
            <button className={css.btn} onClick={() => onDelete(id)}>Delete</button>
        </div>

       
        
    )
}
