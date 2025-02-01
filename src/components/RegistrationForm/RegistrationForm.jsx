import { Formik, Form, Field, ErrorMessage } from "formik"
import css from './RegistrationForm.module.css'
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";


const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('This field is required'),
  email: Yup.string().email('Invalid email').required('This field is required'),
  password: Yup.string().min(6, 'Too short').required('This field is required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};



const RegistrationForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate('/'))
    
        options.resetForm();
}
  return (
      <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
          validationSchema={RegistrationSchema}
      >
        <Form className={css.form} autoComplete="off">
            <div className={css.inputWrapper}>
          <label htmlFor="name">
            <span>Username</span>
          </label>
                  <Field className={css.input}
                      type='text'
                      name='name'
                      id='name'
                      autoFocus />
            <ErrorMessage className={css.error} name="name" component="span" /> 
              </div>
             
            
            <div className={css.inputWrapper}>
          <label htmlFor="email">
            <span>Email</span>
          </label>
                  <Field className={css.input}
                      type='email'
                      name='email'
                      id='email' />    
              <ErrorMessage className={css.error} name="email" component="span" />  
            </div>
            
            <div className={css.inputWrapper}>
          <label htmlFor="password">
            <span>Password</span>
          </label>
                  <Field className={css.input} 
                      type='password'
                      name='password'
                      id='password'
                  />
                <ErrorMessage className={css.error} name="password" component="span"/>
            </div>
            <button className={css.btn} type='submit'>
                  Register
        </button>
        <p>You already have accout? <Link className={css.link} to='/login'>Login!</Link></p>
        </Form>
    </Formik>
  )
}

export default RegistrationForm
