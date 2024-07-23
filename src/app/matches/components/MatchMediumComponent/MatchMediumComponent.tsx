import React from "react"
import type { ProMatch } from "../../utils/interfaces"
import { ClockIcon , CalendarIcon } from "@/app/components/icons"
import MatchDetails from "../../utils/matchUtils"

export const MatchMediumComponent = ({data} : { data : ProMatch }):React.JSX.Element => {

    const matchOptions:MatchDetails = new MatchDetails([data])

    return (
        <>
            <div className="w-fill flex flex-col">
                <div>
                    <h6 className="text-l text-red-900 font-medium cursor-pointer" >{data.league_name}</h6>
                </div>
                <div className="w-full flex flex-row mt-5 gap-x-8">
                    <div className="basis-1/2 justify-center items-center" >
                        <div className={`text-s text-red-900 flex flex-col font-medium border-b-2 flex flex-row items-start border-rose-500`} >
                            {!data.radiant_win ? 
                            <div className="mb-1" >
                                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Win</span>
                            </div> :
                            <div className="mb-1">
                                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Lose</span>
                            </div>}
                            <div><span className="cursor-pointer">{data.dire_name ?? "-"}</span></div>
                        </div>
                        <div className="mt-4">
                            <span className="text-2xl font-bold">{data.dire_score}</span>
                        </div>
                        <div className="mt-4">
                            <span className="text-xl font-bold text-rose-500">The dire</span>
                        </div>
                    </div>
                    <div className="basis-1/2 justify-center items-center " >
                        <div className={`text-s text-red-900 flex flex-col font-medium border-b-2 flex flex-row items-start border-emerald-500`} >
                            {data.radiant_win ? 
                            <div className="mb-1" >
                                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Win</span>
                            </div> :
                            <div className="mb-1">
                                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Lose</span>
                            </div>}
                            <div><span className="cursor-pointer">{data.radiant_name ?? "-"}</span></div>
                        </div>
                        <div className="mt-4">
                            <span className="text-2xl font-bold">{data.radiant_score}</span>
                        </div>
                        <div className="mt-4">
                            <span className="text-xl font-bold text-emerald-600">The radiant</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-6" >
                        <div className="flex flex-row items-center justify-start">
                            <CalendarIcon width="18px" height="18px"  />
                            <div className="pl-4">
                                <span className="text-m text-red-800 font-normal" >{matchOptions.getMatchDate(data)}</span>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-start pt-2">
                            <ClockIcon width="18px" height="18px"  />
                            <div className="pl-4">
                                <span className="text-m text-red-800 font-normal" >{matchOptions.getMatchDuration(data)}</span>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}