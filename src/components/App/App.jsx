

import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { selectIsRefreshing } from '../../redux/auth/selectors.js';
import { lazy, Suspense, useEffect } from "react"
import {refreshUserThunk} from '../../redux/auth/operations.js'
import Layout from '../Layout/Layout.jsx'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx'
import PrivateRoute from '../PrivateRoute/PrivateRoute.jsx';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute.jsx';


const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'))
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage.jsx'))
const RegisterPage = lazy(() => import('../../pages/RegisterPage/RegisterPage.jsx'))
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactPage.jsx'))

export default function App() {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);
    useEffect(() => {
        dispatch(refreshUserThunk());
    }, [dispatch]);

    

    return isRefreshing ? null : (
        <Layout>
            <Suspense fallback={<div>Please wait..</div>}>
                <Routes>
                        <Route path="/" element={<HomePage />} />
                    <Route path='/login' element={
                        <RestrictedRoute>
                            <LoginPage />
                        </RestrictedRoute>} />
                    <Route path='/register' element={
                        <RestrictedRoute>
                            <RegisterPage />
                        </RestrictedRoute>} />
                        <Route path='*' element={<NotFoundPage />} />
                    <Route path='/contacts' element={
                        <PrivateRoute>
                            <ContactsPage />
                        </PrivateRoute>
                    } />
                </Routes>
            </Suspense>
        </Layout>
    )
}
       
