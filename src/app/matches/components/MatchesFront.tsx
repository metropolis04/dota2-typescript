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

export const MatchesFront:React.FunctionComponent = async () => {

    const users = await api.getDotaApi<ApiResponse<ProMatch[]>>('proMatches')
    
    if (users.success) {

        const matchOptions = new MatchDetails(users.data)
        
        return (
            <>
                <ContainerComponent>
                    <div className="flex flex-row w-full pt-16" >
                        <div className="pt-1 grid grid-cols-3 gap-10 pt-6 pb-4 w-full">
                            <div className="col-span-2 flex flex-col bg-white p-5 animate-jumpViewDownMenu">
                                <div>
                                    <h6 className="text-3xl text-red-900 font-medium" >Last match info</h6>
                                </div>
                                <div className="pt-6">
                                    <h6 className="text-2xl text-red-900 font-medium" >{matchOptions.getLastMatch().league_name}</h6>
                                </div>
                                <div className="w-full flex flex-row mt-5 gap-x-8">
                                    <div className="basis-1/2 justify-center items-center" >
                                        <div className={`text-lg text-red-900 font-medium border-b-2 flex flex-row items-center ${matchOptions.getLastMatch().radiant_win ? 'border-rose-500' : "border-emerald-500" }`} >
                                            <span className="cursor-pointer">{matchOptions.getLastMatch().dire_name}</span>
                                            {!matchOptions.getLastMatch().radiant_win ? 
                                            <div className="pl-2 mb-1" >
                                                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Win</span>
                                            </div> :
                                            <div className="pl-2 mb-1">
                                                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Lose</span>
                                            </div>}
                                        </div>
                                        <div className="mt-4">
                                            <span className="text-4xl font-bold">{matchOptions.getLastMatch().dire_score}</span>
                                        </div>
                                        <div className="mt-4">
                                            <span className="text-xl font-bold text-rose-500">The dire</span>
                                        </div>
                                        <div className="mt-4">
                                            <Image width={40} height={40} className="w-8 h-8 rounded-full" src={matchOptions.getLogoObject(matchOptions.getLastMatch().dire_name)} alt="Rounded avatar" />
                                        </div>
                                    </div>
                                    <div className="basis-1/2 justify-center items-center" >
                                        <div className={`text-lg text-red-900 font-medium border-b-2 flex flex-row items-center ${matchOptions.getLastMatch().radiant_win ? "border-emerald-500" : 'border-rose-500' } `}>
                                            <span className="cursor-pointer">{matchOptions.getLastMatch().radiant_name}</span>
                                            {matchOptions.getLastMatch().radiant_win ? 
                                            <div className="pl-2 mb-1" >
                                                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Win</span>
                                            </div> :
                                            <div className="pl-2 mb-1">
                                                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Lose</span>
                                            </div>}
                                        </div>
                                        <div className="mt-4">
                                            <span className="text-4xl font-bold">{matchOptions.getLastMatch().radiant_score}</span>
                                        </div>
                                        <div className="mt-4">
                                            <span className="text-xl font-bold text-emerald-600">The radiant</span>
                                        </div>
                                        <div className="mt-4">
                                            <Image width={40} height={40} className="w-8 h-8 rounded-full" src={matchOptions.getLogoObject(matchOptions.getLastMatch().radiant_name)} alt="Rounded avatar" />
                                        </div>
                                    </div>
                                </div>
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
                                            {matchOptions.getHotLeagues().map((value,index) => {
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
                    </div>
                </ContainerComponent>
            </>
        )
    } else {
        return <h6>No matches found</h6>
    }
    
    
}