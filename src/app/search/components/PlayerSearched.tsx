import React from "react"
import type { UserProfile } from "@/app/about/utils/interfaces"
import Link from "next/link"

interface Props {
    data : UserProfile
}

export const PlayerSearched:React.FunctionComponent<Props> = ({data}) => {

    return (
        <>  
            <Link href={`/players/${data.account_id}`}>
                <div className="flex flex-col p-2 border rounded-md hover:shadow-md justify-center cursor-pointer">
                    <div className="text-wrap">
                        <h6 className="text-wrap break-words">{data.personaname}</h6>
                    </div> 
                    <div>
                        <img src={data.avatarfull} alt={data.personaname} className="object-cover rounded-full h-10 w-10" />
                    </div>
                </div>
            </Link>
        </>
    )
}