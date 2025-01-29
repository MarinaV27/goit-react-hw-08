
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import css from './RegisterPage.module.css'

const RegisterPage = () => {
  return (
    <div>
          <p className={css.title}>Register your account</p>
          <RegistrationForm />
    </div>
  )
}

export default RegisterPage
