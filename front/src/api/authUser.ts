import { IUserLogin, IUserRegister } from "@/Interfaces/IUser";

export const apiRegisterUser = async (userData: IUserRegister): Promise<void> => {
    console.log("Mock user registered:", userData);
};

export const apiLoginUser = async (
    userData: IUserLogin
): Promise<{ user: { id: string; name: string; email: string; address: string; phone: string }; token: string } | null> => {
    console.log("Mock login for user:", userData);

    return {
        user: {
            id: "1",
            name: "Mock User",
            email: "mockuser@example.com",
            address: "123 Mock St, Mock City, MC 12345", 
            phone: "+1234567890",
        },
        token: "mockToken123",
    };
};
