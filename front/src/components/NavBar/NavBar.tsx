"use client"

import Link from "next/link";
import React, { useContext } from 'react';
import { UserContext } from "@/context/userContext";

const NavBar = () => {
    const { user, logOutUser } = useContext(UserContext) || { user: null }; 
    const handleLogout = () =>{
        logOutUser();
    }

    return (
        <nav>
            <Link href={"/home"}>Home</Link>
            {!user ? (
                <div>
                    <Link href={"/login"}>Login</Link>
                    <Link href={"/register"}>Register</Link>
                </div>
            ) : (
                <div>
                    <Link href={"/dashboard"}>My Account</Link>
                    <Link href={"/cart"}>My Cart</Link>
                    <button type="button" onClick={handleLogout}>Logout</button>
                </div>
            )}
        </nav>
    );
};


export default NavBar;
