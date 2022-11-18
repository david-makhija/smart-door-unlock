import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { auth } from './firebase';

const PrivateRoute = (props) => {
    const user = auth.currentUser
    const navigate = useNavigate();

    useEffect( () => {
        if (user===null) navigate("/");
    }, [])

    // If authorized, return an outlet that will render child elements
    return <Outlet/>
}

export default PrivateRoute;