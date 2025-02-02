import { useEffect } from 'react'
import css from './ContactPage.module.css'
import ContactForm from '../../components/ContactForm/ContactForm'
import SearchBox from '../../components/SearchBox/SearchBox'
import ContactList from '../../components/ContactList/ContactList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../../redux/contacts/operations'
import { selectLoading } from '../../redux/contacts/selectors'
//import { Loader } from '../../components/Loader/Loader'
//import {Error} from '../../components/Error/Error'

const ContactPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);




    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

  return (
    <div>
          <p className={css.title}>Your Contacts</p>
          <ContactForm />
          <SearchBox />
          <div className={css.loader}>{isLoading && 'Request in progress...'}</div>
          <ContactList />
         
         

    </div>
  )
}

export default ContactPage



