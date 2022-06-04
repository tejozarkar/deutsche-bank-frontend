import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const GuardedRoute = () => {
    const auth = localStorage.getItem('jwt-token');
    return auth ? <Outlet /> : <Navigate to="/auth/login" />;
}

export default GuardedRoute;