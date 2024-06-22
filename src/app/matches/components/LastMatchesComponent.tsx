'use client'

import React from "react"
import { MatchMediumComponent } from "./MatchMediumComponent/MatchMediumComponent"
import { LastMatchesFilters } from "./last_matches_components/LastMatchesFilters"
import { ProMatch } from "../utils/interfaces"
import MatchDetails from "../utils/matchUtils"

export const LastMatchesComponent = ({data} : {  data : ProMatch[] }):React.JSX.Element => {

    const matches = new MatchDetails(data)
    return (
        <>  
            
            <div className="flex flex-col pt-12 animate-jumpViewDownMenu">
                <h6 className="text-3xl text-red-900 font-medium">Last matches</h6>
                    <LastMatchesFilters  matches={matches} />
                <div className="grid grid-cols-3 gap-x-8 gap-y-8 w-full pb-8 pt-4" >
                {matches.getSortedMatches().slice(1,7).map((value,index) => {
                    return <div key={index} className="bg-white p-4" >
                                <MatchMediumComponent data={value} />
                            </div>
                })}
                </div>
            </div>
        </>
    )
}