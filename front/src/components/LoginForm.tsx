"use client"
import { useContext, useState, useEffect } from "react";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import toast from "react-hot-toast"; 

const LoginForm = () => {
    const initialState = {
        email: "",
        password: "",
        token: ""
    };

    const [userData, setUserData] = useState(initialState);
    const { loginUser } = useContext(UserContext);
    const router = useRouter();
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const userCookies = Cookies.get("userData");
        if (userCookies) {
            router.push("/dashboard"); 
        }
    }, [router]);

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

            Cookies.set("userData", JSON.stringify({ token, user }), { expires: 7 });

            toast.success("Login successful!"); 
            router.push("/dashboard");
        } else {
            toast.error("Login failed. Please try again."); 
        }
    };

    return (
        <div className="max-w-sm mx-auto p-6 border-2 border-black rounded-lg shadow-lg bg-black">
            <h1 className="text-2xl font-semibold text-center text-white mb-4">Welcome!</h1>
            <h2 className="text-xl text-center text-white mb-6">Sign in</h2>

            <form onSubmit={handleOnSubmit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                        Email:
                    </label>
                    <input
                        title="email"
                        type="text"
                        id="email"
                        name="email"
                        value={userData.email}
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

                {error && (
                    <div className="text-red-600 text-sm mt-2">
                        <p>{error}</p>
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full bg-[#4c1d95] text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-[#4c1d95] "
                >
                    Sign in
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
