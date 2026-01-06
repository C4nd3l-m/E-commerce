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
        <div className="min-h-[80vh] py-16 px-6 animate-fade-in">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase">
                        Account Settings
                    </h1>
                    <p className="text-gray-400 font-medium text-lg">Manage your personal information and preferences.</p>
                </div>

                <div className="glass-card rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden group">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full -mr-20 -mt-20 blur-3xl transition-all duration-700 group-hover:bg-brand-primary/10" />

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-2">
                            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Full Name</span>
                            <p className="text-2xl font-bold tracking-tight">{data?.user.name}</p>
                        </div>
                        <div className="space-y-2">
                            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Email Address</span>
                            <p className="text-2xl font-bold tracking-tight">{data?.user.email}</p>
                        </div>
                        <div className="space-y-2">
                            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Shipping Address</span>
                            <p className="text-xl font-semibold text-gray-300">{data?.user.address}</p>
                        </div>
                        <div className="space-y-2">
                            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Phone Number</span>
                            <p className="text-xl font-semibold text-gray-300">{data?.user.phone}</p>
                        </div>
                    </div>

                    <div className="mt-12 pt-10 border-t border-white/5 flex flex-wrap gap-4">
                        <button className="pro-button px-8 py-3 text-sm font-bold">Edit Profile</button>
                        <button className="px-8 py-3 rounded-xl border border-white/10 text-sm font-bold hover:bg-white/5 transition-all">Change Password</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
