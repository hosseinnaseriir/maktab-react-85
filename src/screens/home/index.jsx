import React from 'react';
import { Container } from "@/layout";
import { NavLink } from 'react-router-dom';

const HomeScreen = () => {
    return (
        <Container>
            <NavLink className={(active) => active.isActive ? "text-red-500" : "text-gray-500"} to="/register">Register</NavLink>
            <NavLink className={(active) => active.isActive ? "text-red-500" : "text-gray-500"} to="/login">Login</NavLink>
            <NavLink className={(active) => active.isActive ? "text-red-500" : "text-gray-500"} to="/">Home</NavLink>
        </Container>
    );
}

export default HomeScreen;