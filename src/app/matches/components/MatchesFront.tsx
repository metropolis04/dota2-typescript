import React, { ReactElement } from "react"
import api from "@/app/utils/api"
import type { UserProfile , ProMatch } from "../utils/interfaces"
import type { ApiResponse } from "@/app/utils/apiTypes"
import { ContainerComponent } from "@/app/components/ContainerComponent"
import { UserListComponent } from "./UserListComponent"
import MatchDetails from "../utils/matchUtils"
import { ClockIcon , CalendarIcon, ArrowRightShort } from "@/app/components/icons"
import Image from "next/image"
import { HotLeagueComponent } from "./HotLeagueComponent"
import { LastMatchComponent } from "./LastMatchComponent"
import { LastMatchesComponent } from "./LastMatchesComponent"

export const MatchesFront:React.FunctionComponent = async () => {

    const users = await api.getDotaApi<ApiResponse<ProMatch[]>>('proMatches')
    
    if (users.success) {

        const matchOptions:MatchDetails = new MatchDetails(users.data)
        
        return (
            <>
                <ContainerComponent>
                    <div className="flex flex-col w-full pt-16" >
                        <div className="pt-1 grid grid-cols-3 gap-10 pt-6 pb-4 w-full">
                            <div className="col-span-2 flex flex-col bg-white p-5 animate-jumpViewDownMenu">
                                <div>
                                    <h6 className="text-3xl text-red-900 font-medium" >Last match info</h6>
                                </div>
                                <div className="pt-6">
                                    <h6 className="text-2xl text-red-900 font-medium" >{matchOptions.getLastMatch().league_name}</h6>
                                </div>
                                <LastMatchComponent data={matchOptions.getLastMatch()} matchOptions={matchOptions} />
                                <div className="flex flex-col mt-6" >
                                    <div className="flex flex-row items-center justify-start">
                                        <CalendarIcon width="18px" height="18px"  />
                                        <div className="pl-4">
                                            <span className="text-xl text-red-800 font-normal" >{matchOptions.getMatchDate(matchOptions.getLastMatch())}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start pt-2">
                                        <ClockIcon width="18px" height="18px"  />
                                        <div className="pl-4">
                                            <span className="text-xl text-red-800 font-normal" >{matchOptions.getMatchDuration(matchOptions.getLastMatch())}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" pt-1 bg-white pb-4 animate-jumpViewDownMenu">
                                <div className="flex flex-col justify-between h-full p-5">
                                    <div className="flex flex-col">
                                        <div>
                                            <h6 className="text-3xl text-red-900 font-medium" >Hot leagues</h6>
                                        </div>
                                        <div className="flex flex-col">
                                            {matchOptions.getHotLeagues().slice(0,7).map((value,index) => {
                                                return <HotLeagueComponent key={index} data={value} matches={matchOptions.getLeagueMatches(value.league_name)} />
                                            })}
                                        </div>
                                    </div>
                                    <div className="self-end">
                                        <h6 className="text-normal inline text-sm text-black cursor-pointer underline" >view all</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <LastMatchesComponent  data={users.data} />
                    </div>
                </ContainerComponent>
            </>
        )
    } else {
        return <h6>No matches found</h6>
    }
    
    
}