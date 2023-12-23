/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import React from 'react';

export default function AuthenticatedRoute({ children }) {
    let location = useLocation();

    if (user === null) {
        return <Navigate to="login" state={{ from: location.pathname }}></Navigate>
    }

    return children;
}