import React from "react"
import { ArrowRightShort } from "@/app/components/icons"
import type { ProMatch } from "../utils/interfaces"
import Link from "next/link"

interface Props {
    data : ProMatch,
    matches : ProMatch[]
}

export const HotLeagueComponent:React.FunctionComponent<Props> = ({data , matches}) => {
    
   
    return (
        <>  
            <div className="flex flex-col mt-1">
                <div className="pt-2 flex flex-row items-center">
                    <Link href={`/leagues/${data.leagueid}`} prefetch={false} >
                        <h6 className="inline text-base font-normal text-red-800 cursor-pointer ">{data.league_name}</h6>
                    </Link>
                    <div className="pl-2">
                        <ArrowRightShort width="18px" height="18px" />
                    </div>
                </div>
                <div>
                    <span className="text-sm text-normal cursor-pointer text-black">{matches.length} matches</span>
                </div>
            </div>
        </>
    )
}