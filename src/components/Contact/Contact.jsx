import css from "./Contact.module.css"
import { FaUser } from "react-icons/fa6";
import { MdCall } from "react-icons/md";

export default function Contact ({ data: {id, name, number}, onDelete}) {
    return (
        <div> 
            <div className={css.contact}>
               <p><FaUser />  {name}</p>
               <p><MdCall />  {number}</p>
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>

       
        
    )
}
