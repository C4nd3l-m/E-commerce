"use client";

import { useContext } from "react";
import { useState } from "react";
import { IUserRegister } from "@/Interfaces/IUser";
import { useRouter } from "next/navigation";
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
        <div className="max-w-sm mx-auto p-6 border-2 border-black rounded-lg shadow-lg bg-black">
            <h1 className="text-2xl font-semibold text-center text-white mb-4">Register</h1>

            <form onSubmit={handleOnSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white">
                        Name:
                    </label>
                    <input
                        title="name"
                        type="text"
                        id="name"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#333]"
                    />
                </div>
                
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                        Email:
                    </label>
                    <input
                        title="email"
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#333]"
                    />
                </div>
                
                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-white">
                        Address:
                    </label>
                    <input
                        title="address"
                        type="text"
                        id="address"
                        name="address"
                        value={userData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#333]"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white">
                        Phone:
                    </label>
                    <input
                        title="phone"
                        type="text"
                        id="phone"
                        name="phone"
                        value={userData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#333]"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-white">
                        Password:
                    </label>
                    <input
                        title="password"
                        type="password"
                        id="password"
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#333]"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#4c1d95] text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-[#4c1d95]"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
