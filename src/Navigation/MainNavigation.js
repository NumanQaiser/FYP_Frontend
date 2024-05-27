import React from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import BookScreen from '../Screens/BookScreen'
import NotFoundScreen from '../Screens/NotFoundScreen'
import LoginScreen from '../Screens/LoginScreen'
import SignUpScreen from '../Screens/SignUpScreen'
import { AppContext, useAppContext } from '../StateManagement/Context'
import ProtectedRoutes from './ProtectedRoutes'
import AddBookScreen from '../Screens/AddBookScreen'
import UserProfile from '../Screens/UserProfile'
import Home from '../Screens/Home'
import Scan from '../Screens/Scan'
import ExploitsDB from '../Screens/Exploits/ExploitsDB'


export const RoutHistory = {
    navigate: null,
    location: null
}
function MainNavigation() {
    // this is for outside router browsing
    RoutHistory.navigate = useNavigate();
    RoutHistory.location = useLocation();
    const { login, loginUser, userData } = useAppContext(AppContext)
    return (

        <Routes>

            <Route path='/login' element={<LoginScreen isUserLogin={loginUser} />} />
            <Route path='/signup' element={<SignUpScreen />} />
            <Route path='/' element={
                <ProtectedRoutes isLogin={login} >
                     <Home />
                </ProtectedRoutes>
            }
            />
             <Route path='/Scan' element={
                <ProtectedRoutes isLogin={login} >
                     <Scan/>
                </ProtectedRoutes>
            }
            />
            <Route path='/exploits' element={
                <ProtectedRoutes isLogin={login}>
                    <ExploitsDB/>
                </ProtectedRoutes>
            }/>
            <Route path='/book' element={
                <ProtectedRoutes isLogin={login}>
                    <BookScreen activeUser={userData} />
                </ProtectedRoutes>
            } />
            <Route path='/add' element={
                <ProtectedRoutes isLogin={login}>
                    <AddBookScreen />
                </ProtectedRoutes>
            } />
            <Route path='/profile' element={
                <ProtectedRoutes isLogin={login}>
                    <UserProfile user={userData} />
                </ProtectedRoutes>
            } />
            <Route path='*' element={<NotFoundScreen />} />
        </Routes>


    )
}

export default MainNavigation