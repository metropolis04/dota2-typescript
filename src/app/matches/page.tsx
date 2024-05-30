import React from "react"
import api from "../utils/api"
import { UserProfile } from "./utils/interfaces"
import { ApiResponse } from "../utils/apiTypes";
import { UserListComponent } from "./components/UserListComponent";
      
export default async function AboutPage() {

    const users = await api.getUsersByName<ApiResponse<UserProfile[]>>({
        name : 'metropolis' , 
        url : 'https://api.opendota.com/api/search?q='
    }
    )
    
    return (
        <>
            <div>This is my first next typescript tailwind page</div>
            <div className="flex flex-row flex-wrap" >
               {users.success &&  users.data.map((value,index) => {
                return  <UserListComponent key={index} user={value} />
               })}
            </div>
        </>
    )

    
}