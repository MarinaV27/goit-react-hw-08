import { useDispatch, useSelector } from 'react-redux'
import css from './UserMenu.module.css'
import { selectUser } from '../../redux/auth/selectors'
import { toast } from 'react-hot-toast'
import { logoutThunk } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogout = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        toast.success('Good luck! See ya later.', {
          icon: '👋',
        });
      })
      .catch(error => {
        toast.error('Logout failed. Please try again.');
        console.log(error.message);
      });
  };


  
    return (
    <div className={css.wrapper}>
          <p className={css.text}>Welcome, { user.name } 🙂 </p>
            <button className={css.btn} type='button' onClick={handleLogout}>
                Logout
          </button>
    </div>
  )
}

export default UserMenu
