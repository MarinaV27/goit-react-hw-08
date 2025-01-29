import { Formik, Form, Field  } from "formik";
import css from './LoginForm.module.css'
import { Link } from "react-router-dom";

const initialValues = {
    email: '',
    password: '',
}


 
export default function LoginForm() {
    const handleSubmit = (values, options) => {
        options.resetForm();
}
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            <Form>
                <div className={css.inputWrapper}>
                    <label className={css.label}>
                        <span>Email:</span>
                    </label>
                    <Field className={css.input} type="email" name="email" autoFocus/>
                </div>
                <div className={css.inputWrapper}>
                    <label className={css.label}>
                        <span>Password:</span>
                    </label>
                    <Field className={css.input} type="password" name="password" />
                </div>
                <div>
                    <button className={css.btn} type="submit">
                        Log In
                    </button>
                </div>
                <p>You do not have accout? <Link to='/register'>Lets create one!</Link></p>
            </Form>
        </Formik> 
    )
}