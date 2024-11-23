import { IUserLogin, IUserRegister} from "@/Interfaces/IUser";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const apiRegisterUser = async (userData: IUserRegister) => {
    try {
        const response = await fetch(`${APIURL}/users/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });

        return response;
    } catch (error) {
        console.error("Error during registration:", error);
        return { success: false, message: "Error during registration" };
    }
}

export const apiLoginUser = async (userData: IUserLogin): Promise<{ user: { id: string, name: string }; token: string } | null> => {
    try {
        const response = await fetch(`${APIURL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();

    } catch (error) {
        console.error("Error during login:", error);
        return null;
    }
};
