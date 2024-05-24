import { useId } from "react"
import css from "./ContactForm.module.css"
//import * as Yup from "react"
import { Formik, Form, Field } from "formik"

export default function ContactForm ({ onAdd }) { 
    const fieldId = useId();

    return (
        <Formik 
           initialValues={{ name: "", number: "" }}
           //onAdd({

          // })
         >
        < Form className={css.container}>
            <label className={css.label} htmlFor={`${fieldId}-name`}>Name</label>
            <Field className={css.input} type="text" name="name" id={`${fieldId}-name`} /> 
            
            <label className={css.label} htmlFor={`${fieldId}-namber`}>Namber</label>
            <Field className={css.input} type="text" name="namber" id={`${fieldId}-namber`} />
            
            <button className={css.btn} type="submit">Add contact</button> 

        </Form>
        
        </Formik> 
    )
}