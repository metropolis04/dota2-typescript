import React from "react"
import api from "../utils/api"
import { UserProfile } from "./utils/interfaces"
import { ApiResponse } from "../utils/apiTypes";
      
export default async function AboutPage() {

    const users = await api.getUsersByName<ApiResponse<UserProfile[]>>('metropolis')
    
    return (
        <>
            <div>This is my first next typescript tailwind page</div>
            <div>
               {users.success &&  users.data.map((value,index) => {
                return <h6 className="text-brown-800 text-bold" key={index} >{value.personaname ?? ""}</h6>
               })}
            </div>
        </>
    )

    
}