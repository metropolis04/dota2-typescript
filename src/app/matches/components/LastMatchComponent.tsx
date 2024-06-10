import React from "react"
import type { ProMatch , ProMatchInfo } from "../utils/interfaces"
import Image from "next/image"
import MatchDetails from "../utils/matchUtils"
import api from "@/app/utils/api"
import type { ApiResponse } from "@/app/utils/apiTypes"
import { InfoMatchUtils } from "../utils/infoMatchUtils"
import dota2heroes from "@/app/heroes/heroes"
import noLogoImage from "@/app/assets/question.png"

interface Props {
    data : ProMatch
    matchOptions : MatchDetails
}

export const LastMatchComponent:React.FunctionComponent<Props> = async ({data , matchOptions}) => {

    const matchInfo = await api.getDotaApi<ApiResponse<ProMatchInfo>>(`matches/${data.match_id}`)
    if (matchInfo.success) {
        const info = new InfoMatchUtils(matchInfo.data)
        
        return (
            <>
                <div className="w-full flex flex-row mt-5 gap-x-8">
                    <div className="basis-1/2 justify-center items-center" >
                        <div className={`text-lg text-red-900 font-medium border-b-2 flex flex-row items-center ${data.radiant_win ? 'border-rose-500' : "border-emerald-500" }`} >
                            <span className="cursor-pointer">{data.dire_name}</span>
                            {!data.radiant_win ? 
                            <div className="pl-2 mb-1" >
                                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Win</span>
                            </div> :
                            <div className="pl-2 mb-1">
                                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Lose</span>
                            </div>}
                        </div>
                        <div className="mt-4">
                            <span className="text-4xl font-bold">{data.dire_score}</span>
                        </div>
                        <div className="mt-4">
                            <span className="text-xl font-bold text-rose-500">The dire</span>
                        </div>
                        <div className="mt-4">
                            <Image width={40} height={40} className="w-8 h-8 rounded-full" src={matchOptions.getLogoObject(data.dire_name)} alt="Rounded avatar" />
                        </div>
                        <div className="mt-4 flex flex-row gap-2" >
                            {info.getTeams()?.dire.map((value,index) => {
                                let heroObject = dota2heroes.find(hero => hero.id === value.hero_id )
                                return <img key={index} src={heroObject  ? heroObject.image : noLogoImage.src} title={heroObject?.localized_name} alt="hero image" width={64} height={64} />
                            })}
                        </div>
                    </div>
                    <div className="basis-1/2 justify-center items-center" >
                        <div className={`text-lg text-red-900 font-medium border-b-2 flex flex-row items-center ${data.radiant_win ? "border-emerald-500" : 'border-rose-500' } `}>
                            <span className="cursor-pointer">{data.radiant_name}</span>
                            {data.radiant_win ? 
                            <div className="pl-2 mb-1" >
                                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Win</span>
                            </div> :
                            <div className="pl-2 mb-1">
                                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Lose</span>
                            </div>}
                        </div>
                        <div className="mt-4">
                            <span className="text-4xl font-bold">{data.radiant_score}</span>
                        </div>
                        <div className="mt-4">
                            <span className="text-xl font-bold text-emerald-600">The radiant</span>
                        </div>
                        <div className="mt-4">
                            <Image width={40} height={40} className="w-8 h-8 rounded-full" src={matchOptions.getLogoObject(data.radiant_name)} alt="Rounded avatar" />
                        </div>
                        <div className="mt-4 flex flex-row gap-2" >
                            {info.getTeams()?.radiant.map((value, index) => {
                                    let heroObject = dota2heroes.find(hero => hero.id === value.hero_id )
                                    return <img key={index} src={heroObject  ? heroObject.image : noLogoImage.src} title={heroObject?.localized_name} alt="hero image" width={64} height={64} />
                                })}
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return <h6>no match info data</h6>
    }
    
}