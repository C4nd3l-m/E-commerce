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
        <nav className="sticky top-0 z-50 w-full glass-card border-none bg-background/60 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center space-x-8">
                    <Link href="/" className="flex items-center group transition-transform hover:scale-105">
                        <Image
                            title="logo"
                            src={logo}
                            alt="NextByte Logo"
                            className="mr-3 rounded-lg shadow-lg"
                            width={50}
                            height={50}
                        />
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
                            NextByte
                        </span>
                    </Link>
                    <Link href="/home" className="text-sm font-medium text-gray-400 hover:text-white transition-colors pt-1">
                        Store
                    </Link>
                </div>

                <div className="flex items-center space-x-6">
                    {user ? (
                        <>
                            <div className="hidden md:flex items-center space-x-6">
                                <Link
                                    href="/dashboard"
                                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                                >
                                    My Account
                                </Link>
                                <Link
                                    href="/cart"
                                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                                >
                                    My Cart
                                </Link>

                                <Link
                                    href="/orders"
                                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                                >
                                    My Orders
                                </Link>
                            </div>
                            <button
                                type="button"
                                onClick={handleLogout}
                                className="text-sm font-bold bg-red-500/10 text-red-400 px-4 py-2 rounded-full border border-red-500/20 hover:bg-red-500 hover:text-white transition-all active:scale-95"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/login"
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                            >
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className="pro-button text-sm"
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
