

import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { selectIsRefreshing } from '../../redux/auth/selectors.js';
import { lazy, Suspense, useEffect } from "react"
import {refreshUser} from '../../redux/auth/operations.js'
import Layout from '../Layout/Layout.jsx'
import LoginPage from '../../pages/LoginPage/LoginPage.jsx'
import RegisterPage from '../../pages/RegisterPage/RegisterPage.jsx'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx'


const HomePage = lazy (() => import('../../pages/HomePage/HomePage.jsx'))

export default function App() {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);
    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    

    return isRefreshing ? (
        <p>Refreshing user please wait...</p>
    ) : (
        <Layout>
            <Suspense fallback={<div>Please wait..</div>}>
                <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/register' element={<RegisterPage />} />
                        <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </Layout>
    )
}
       
