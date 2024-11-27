"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { UserContext } from "@/context/userContext";
import logo from "@/components/NavBar/NextByte.png";
import Image from "next/image";

const NavBar = () => {
    const { user, logOutUser } = useContext(UserContext) || { user: null };

    const handleLogout = () => {
        logOutUser();
    };

    return (
        <nav className="bg-grey text-white flex items-center justify-between px-6 py-4 shadow-md">
            <div className="flex items-center">
                <Image
                    title="logo"
                    src={logo}
                    alt="NextByte Logo"
                    className="mr-4 rounded-md"
                    width={70}
                    height={70}
                />
                <Link href="/home" className="text-xl font-bold hover:text-gray-400">
                    Home
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                {user ? (
                    <>
                        <Link
                            href="/dashboard"
                            className="text-sm font-medium hover:text-gray-400"
                        >
                            My Account
                        </Link>
                        <Link
                            href="/cart"
                            className="text-sm font-medium hover:text-gray-400"
                        >
                            My Cart
                        </Link>
                        <button
                            type="button"
                            onClick={handleLogout}
                            className="text-sm font-medium bg-#ffffff00 px-3 py-1 rounded hover:bg-red-500"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link
                            href="/login"
                            className="text-sm font-medium hover:text-gray-400"
                        >
                            Login
                        </Link>
                        <Link
                            href="/register"
                            className="text-sm font-medium hover:text-gray-400"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
