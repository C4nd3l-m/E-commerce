"use client";

import { IUserLogin } from "@/Interfaces/IUser";
import { useContext, useState } from "react";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation"; // Para redirección
import  Cookies  from "js-cookie";

const LoginForm = () => {
    const initialState = {
        email: "",
        password: "",
    };

    const [userData, setUserData] = useState<IUserLogin>(initialState);
    const { loginUser } = useContext(UserContext)
    const router = useRouter(); // Hook para redirigir

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const response = await loginUser(userData);
        if (response) {
            const { token, user } = response;
    
            // Guardar en cookies
            Cookies.set("userData", JSON.stringify({ token, user }), { expires: 1 });
    
            // Redirigir si el login fue exitoso
            alert("Login successful!");
            router.push("/dashboard");
        } else {
            alert("Login failed. Please try again.");
        }
    };
    

    return (
        <div>
            <h1>Welcome!</h1>
            <h2>Sign in</h2>
            <div>
                <form onSubmit={handleOnSubmit}>
                    <div>
                        <label>Email:</label>
                        <input
                            title="email"
                            type="text"
                            name="email"
                            value={userData.email}
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
                    <button type="submit">Sign in</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
