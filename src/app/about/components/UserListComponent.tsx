import React from "react"
import type { UserProfile } from "../utils/interfaces"
import Link from "next/link"

interface Props {
    user : UserProfile
}

export const UserListComponent:React.FunctionComponent<Props> = ({user}) => {


    return (
        <>
            
            <div  className="basis-1/8 lg:basis-1/4 px-4 py-4 cursor-pointer" >
                <Link href={`/players/${user.account_id ?? ""}`} prefetch={false} >
                    <h6 className="text-brown-900 text-bold px-4 py-4 rounded border " >{user.personaname}</h6>
                </Link>
            </div>
            
        </>
    )
}