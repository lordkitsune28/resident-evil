import React, { useState, useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Login from '../components/Login';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from "./PublicRoute";
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { loginEmailPassword } from "../redux/actions/actionLogin";
import { Register } from "../components/Register";
import { Spinner } from "react-bootstrap";


export const AppRouters = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                console.log(user)
                dispatch(loginEmailPassword(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking) {
        return (
            <div>
            <img className="spinner" src="https://res.cloudinary.com/donoutoby/image/upload/v1654671112/4dd277_835e8d46ca034bd4a8448647bec05a45_igtz7v.gif" alt="cargando..." />
            </div>
        )
    }

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/login" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Login />
                    </PublicRoute>
                } />

                <Route path="/register" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Register />
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRoute isAuthenticated={isLoggedIn}>
                        <DashboardRoutes />
                    </PrivateRoute>}
                />

            </Routes>
        </BrowserRouter>
    )
}
