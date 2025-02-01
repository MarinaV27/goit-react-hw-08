import { Formik, Form, Field  } from "formik";
import css from './LoginForm.module.css'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";

const initialValues = {
    email: '',
    password: '',
}


 
export default function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleSubmit = (values, options) => {
        dispatch(loginThunk(values)).unwrap().then(() => navigate('/'))
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