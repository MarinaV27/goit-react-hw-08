import { Formik, Form, Field  } from "formik";
import css from './LoginForm.module.css'


const initialValues = {
    email: '',
    password: '',
}

export default function LoginForm () {
    return (
        <Formik
            initialValues={initialValues}
        >
            <Form>
                <div className={css.inputWrapper}>
                    <label className={css.label}>Email</label>
                    <Field className={css.input} type="email" name="email" autoFocus/>
                </div>
                <div className={css.inputWrapper}>
                    <label className={css.label}>Password</label>
                    <Field className={css.input} type="password" name="password" />
                </div>
                <div>
                    <button className={css.btn} type="submit">
                        Log In
                    </button>
                </div>
            </Form>
        </Formik> 
    )
}