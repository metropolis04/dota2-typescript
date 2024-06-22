import React from "react"
import type { ProMatch } from "../../utils/interfaces"
import MatchDetails from "../../utils/matchUtils"
import { FilterInput } from "./FilterInput"


export const LastMatchesFilters = ({matches} : {matches : MatchDetails}):React.JSX.Element => {

    
    return (
        <>
            <div className="pt-6">
                <div className="flex flex-col  bg-white p-6">
                    <div className="border-b pb-1">
                        <h6 className="text-lg font-normal">Filters</h6>
                    </div>
                    <div className="flex flex-col pt-6">
                        <div className="flex w-full flex-row">
                            <div className="inline-flex flex-row items-center border rounded relative">
                                <div className="pe-6" >
                                    <h6 className="text-sm font-normal w-28 ps-2">Select league</h6>
                                </div>
                                <div className="flex flex-row items-center">
                                    <FilterInput 
                                        type="league" 
                                        matches={matches}
                                        items={matches.getHotLeagues().map(value => value.league_name)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-row pt-4 gap-6">
                            <div className="inline-flex flex-row items-center border rounded relative">
                                <div className="pe-6" >
                                    <h6 className="text-sm font-normal w-28 ps-2">Team win</h6>
                                </div>
                                <div className="flex flex-row items-center">
                                    <FilterInput 
                                        type="team" 
                                        matches={matches} 
                                        items={['radiant', 'dire']} 
                                    />
                                </div>
                            </div>
                            <div className="inline-flex flex-row items-center border rounded relative">
                                <div className="pe-6" >
                                    <h6 className="text-sm font-normal w-28 ps-2">Duration</h6>
                                </div>
                                <div className="flex flex-row items-center">
                                    <FilterInput 
                                        type="duration" 
                                        matches={matches} 
                                        items={['< 30 min', '30 - 50 min' , ' > 50 min']} 
                                    />
                                </div>
                            </div>
                            <div className="inline-flex flex-row items-center border rounded relative">
                                <div className="pe-6" >
                                    <h6 className="text-sm font-normal w-28 ps-2">Select team</h6>
                                </div>
                                <div className="flex flex-row items-center">
                                    <FilterInput 
                                        type="teamName" 
                                        matches={matches} 
                                        items={matches.getTeams()} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}