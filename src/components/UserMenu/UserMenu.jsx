import { useSelector } from 'react-redux'
import css from './UserMenu.module.css'
import { selectUser } from '../../redux/auth/selectors'

const UserMenu = () => {
  
  
  const user = useSelector(selectUser)
  
    return (
    <div className={css.wrapper}>
          <p className={css.text}>Welcome, { user.name } 🙂 </p>
            <button className={css.btn} type='button' onClick={}>
                Logout
          </button>
    </div>
  )
}

export default UserMenu
