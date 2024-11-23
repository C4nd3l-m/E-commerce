"use client"

import { useContext } from "react";
import { useState } from "react";
import { IUserRegister } from "@/Interfaces/IUser";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/userContext";

const RegisterForm = () => {

    const initialState = {
        email: "",
        password: "",
        name: "",
        address: "",
        phone: "",
    };

    const [userData, setUserData] = useState<IUserRegister>(initialState);
    const { registerUser } = useContext(UserContext)
    const router = useRouter();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
                await registerUser(userData);
                //cambiar alert por sweetalert
                alert("User created successfully");
                router.push("/login")

        } catch (error) {
            console.error("Register error", error);
            //cambiar alert por sweetalert
            alert("An error occurred while registering");
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        title="name"
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        title="email"
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input
                        title="address"
                        type="text"
                        name="address"
                        value={userData.address}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        title="phone"
                        type="text"
                        name="phone"
                        value={userData.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        title="password"
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
