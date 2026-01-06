"use client";

import { useContext } from "react";
import { useState } from "react";
import { IUserRegister } from "@/Interfaces/IUser";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UserContext } from "@/context/userContext";
import toast from "react-hot-toast";

const RegisterForm = () => {

    const initialState = {
        email: "",
        password: "",
        name: "",
        address: "",
        phone: "",
    };

    const [userData, setUserData] = useState<IUserRegister>(initialState);
    const { registerUser } = useContext(UserContext);
    const router = useRouter();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await registerUser(userData);
            toast.success("User created successfully!");
            router.push("/login");
        } catch (error) {
            console.error("Register error", error);
            toast.error("An error occurred while registering.");
        }
    };

    return (
        <div className="max-w-2xl mx-auto w-full glass-card rounded-[2.5rem] p-10 space-y-8 animate-fade-in my-12">
            <div className="space-y-2 text-center">
                <h1 className="text-4xl font-black tracking-tight">Create Account</h1>
                <p className="text-gray-400 font-medium">Join the NextByte ecosystem today</p>
            </div>

            <form onSubmit={handleOnSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-gray-300 ml-1">
                        Full Name
                    </label>
                    <input
                        title="name"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={userData.name}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all"
                    />
                </div>

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
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-300 ml-1">
                        Phone Number
                    </label>
                    <input
                        title="phone"
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="+1 234 567 890"
                        value={userData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all"
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
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all"
                    />
                </div>

                <div className="space-y-2 md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-bold text-gray-300 ml-1">
                        Shipping Address
                    </label>
                    <input
                        title="address"
                        type="text"
                        id="address"
                        name="address"
                        placeholder="123 Digital Ave, Tech City"
                        value={userData.address}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all"
                    />
                </div>

                <button
                    type="submit"
                    className="md:col-span-2 w-full pro-button py-4 text-lg font-bold mt-4 shadow-2xl shadow-brand-primary/20"
                >
                    Create Account
                </button>
            </form>

            <div className="text-center">
                <p className="text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link href="/login" className="text-brand-primary font-bold hover:underline underline-offset-4">
                        Sign in instead
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;
