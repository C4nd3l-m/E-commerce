"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { IUserSession } from "@/Interfaces/IUser";

const Dashboard: React.FC = () => {
    const [data, setData] = useState<IUserSession | null>(null);

    useEffect(() => {
        const dataCookie = Cookies.get("userData");
        if (dataCookie) {
            const parsedData: IUserSession = JSON.parse(dataCookie);
            setData(parsedData);
        } else {
            setData(null);
        }
    }, []);

    return (
        <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center py-10">
            <h1 className="text-4xl font-semibold mb-8">My Account</h1>

            <div className="max-w-4xl w-full bg-[#1f1f1f] p-8 rounded-lg shadow-xl">
                <div className="mb-4">
                    <p className="text-xl font-medium">
                        <strong>Name:</strong> {data?.user.name}
                    </p>
                </div>
                <div className="mb-4">
                    <p className="text-xl font-medium">
                        <strong>Email:</strong> {data?.user.email}
                    </p>
                </div>
                <div className="mb-4">
                    <p className="text-xl font-medium">
                        <strong>Address:</strong> {data?.user.address}
                    </p>
                </div>
                <div className="mb-4">
                    <p className="text-xl font-medium">
                        <strong>Phone:</strong> {data?.user.phone}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
