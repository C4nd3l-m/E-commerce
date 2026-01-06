"use client";

import { IUserLogin } from "@/Interfaces/IUser";
import { useContext, useState } from "react";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const LoginForm = () => {
    const initialState = {
        email: "",
        password: "",
        token: "",
    };

    const [userData, setUserData] = useState<IUserLogin>(initialState);
    const { loginUser } = useContext(UserContext);
    const router = useRouter();

    const [error, setError] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const validateForm = () => {
        const { email, password } = userData;

        if (!email || !password) {
            setError("Both email and password are required.");
            return false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            setError("Please enter a valid email address.");
            return false;
        }

        setError("");
        return true;
    };

    const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validateForm()) {
            toast.error(error);
            return;
        }

        const response = await loginUser(userData);
        if (response) {
            const { token, user } = response;

            Cookies.set("userData", JSON.stringify({ token, user }), { expires: 1 });

            toast.success("Login successful!");
            router.push("/dashboard");
        } else {
            toast.error("Login failed. Please try again.");
        }
    };

    return (
        <div className="max-w-md mx-auto w-full glass-card rounded-[2.5rem] p-10 space-y-8 animate-fade-in mt-12">
            <div className="space-y-2 text-center">
                <h1 className="text-4xl font-black tracking-tight">Welcome Back</h1>
                <p className="text-gray-400 font-medium">Sign in to your NextByte account</p>
            </div>

            <form onSubmit={handleOnSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-300 ml-1">
                        Email Address
                    </label>
                    <input
                        title="email"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="name@example.com"
                        value={userData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-bold text-gray-300 ml-1">
                        Password
                    </label>
                    <input
                        title="password"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="••••••••"
                        value={userData.password}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all"
                    />
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-4 rounded-xl flex items-center gap-3">
                        <span className="shrink-0 block w-1.5 h-1.5 rounded-full bg-red-500" />
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full pro-button py-4 text-lg font-bold shadow-2xl shadow-brand-primary/20"
                >
                    Sign In
                </button>
            </form>

            <div className="text-center">
                <p className="text-sm text-gray-500">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-brand-primary font-bold hover:underline underline-offset-4">
                        Register now
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
