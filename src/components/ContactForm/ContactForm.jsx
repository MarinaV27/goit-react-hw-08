import { useId } from "react"
import css from "./ContactForm.module.css"
import { nanoid } from 'nanoid'
import * as Yup from "react"
import { Formik, Form, Field } from "formik"
import { number } from "yup"

export default function ContactForm ({ onAdd }) { 
    const fieldId = useId();

    const UserSchema = Yup.object().shape({
        name: Yup.string()
          .min(3, 'мінімальна кількість символів - 3')
          .max(50, 'максимальна кількість символів - 50')
          .required('Поле обовʼязкове для заповнення!'),
        number: Yup.string()
          .min(3, 'мінімальна кількість символів - 3')
          .max(50, 'максимальна кількість символів - 50')
          .required('Поле обовʼязкове для заповнення!'),
      });

    const handleSubmit = (values, actions) => { 
        onAdd ({
            id: nanoid(),
            name: values.name,
            number: values.number,
        })
        actions.resetForm();
    }

    return (
        <Formik 
           initialValues={{ name: "", number: "" }}
           onSubmit = {handleSubmit}
           validationSchema = {UserSchema}
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