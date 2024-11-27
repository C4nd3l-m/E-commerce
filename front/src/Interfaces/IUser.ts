export interface IUserLogin {
    email: string;
    password: string;
    token: string
}

export interface IUser{
    id: string;
    name: string;
    token: string
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


export interface IUserSession2 {
    user: {
        id: string;
        name: string;
    };
    token: string;
}
