import { useId } from "react"
import css from "./ContactForm.module.css"
import { nanoid } from 'nanoid'
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik"


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
            <ErrorMessage name="name" />

            <label className={css.label} htmlFor={`${fieldId}-number`}>Number</label>
            <Field className={css.input} type="text" name="number" id={`${fieldId}-number`} />
            <ErrorMessage name="number" /> 

            <button className={css.btn} type="submit">Add contact</button> 

        </Form>
        
        </Formik> 
    )
}