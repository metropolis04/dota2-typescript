import React from "react"
import type { ProMatch } from "../utils/interfaces"
import Link from "next/link"

interface Props {
    match : ProMatch
}

export const UserListComponent:React.FunctionComponent<Props> = ({match}) => {


    return (
        <>
            
            <div  className="basis-1/8 lg:basis-1/4 px-4 py-4 cursor-pointer" >
                <Link href={`/players/${match.match_id ?? ""}`} prefetch={false} >
                    <h6 className="text-brown-900 text-bold px-4 py-4 rounded border " >{match.match_id}</h6>
                </Link>
            </div>
            
        </>
    )
}