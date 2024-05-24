import { useId } from "react"
import css from "./CntactForm.module.css"
//import * as Yup from "react"
import { Formik, Form, Field } from "formik"

export default function CntactForm ({onAdd}) { 
    const fieldId = useId();

    return (
        <Formik>
        < Form className={css.container}>
            <label className={css.label} htmlFor={`${fieldId}-name`}>Name</label>
            <Field className={css.input} type="text" name="name" id={`${fieldId}-name`} /> 

        </Form>
        
        </Formik> 
    )
}