export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserRegister {
    email: string;
    password: string;
    name: string;
    address: string;
    phone: string;
}

export interface IUserSession {
    token: string;
    user: {
        id: number;
        email: string;
        password: string;
        name: string;
        address: string;
        phone: string;
        role: string;
        credential: {
            id: number;
            password: string;
        }
    }
}
