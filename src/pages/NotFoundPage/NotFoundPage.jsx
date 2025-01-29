import { Link } from 'react-router-dom'
import css from './NotFoundPage.module.css'

const NotFoundPage = () => {
  return (
    <div className={css.wrapper}>
      <p>Sorry, but the pege was not found.</p>
          <p>
              <Link to='/'>Go Back</Link>
      </p>
    </div>
  )
}

export default NotFoundPage
