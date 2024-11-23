"use client"
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { IUserSession } from "@/Interfaces/IUser";

const Dashboard: React.FC = () =>{
    const [data, setData] = useState<IUserSession | null>(null)

    useEffect(() =>{
        const dataCookie = Cookies.get("userData")
        if(dataCookie){
            const parsedData: IUserSession = JSON.parse(dataCookie);
            setData(parsedData)
        }else{
            setData(null)
        }
    },[])
    return(
        <div>
            <h1>My Account</h1>

            <div>
                <p><strong>Name:{data?.user.name}</strong></p>
                <p><strong>Email:{data?.user.email}</strong></p>
                <p><strong>Address:{data?.user.address}</strong></p>
                <p><strong>Phone:{data?.user.phone}</strong></p>
            </div>
        </div>
    )
}

export default Dashboard;