import React from "react"
import type { Infohero, HeroObject } from "@/app/matches/utils/interfaces"


interface Props {
    infoHero : Infohero[];
    heroesObjects : HeroObject[];
    heroId : number | string;
}

export const InfoHeroComponent:React.FunctionComponent<Props> = ({infoHero , heroesObjects , heroId}) => {

    const combineObject:{[key:string] : number | string}[] = infoHero.map((value,index) => {
        let searchObject = {}
        heroesObjects.forEach(heroValue => {
            
            if (heroValue.id.toString() === value.hero_id.toString()) {
                searchObject = {...value, ...heroValue}
            }
        })
        return searchObject
    })
    
    return (
        <>
            <div className="flex flex-row justify-center pt-4">
                <div className="flex basis-3/4 flex-col px-2 items-start ">
                    {combineObject.sort((a,b):number => {
                        if (b.games_played > a.games_played) {
                            return 1
                        }
                        if (b.games_played < a.games_played) {
                            return -1
                        }
                        return 0
                    }).map((value,index) => {
                        return <div key={index} className="flex flex-col pt-2 border rounded hover:shadow-md mt-3 py-2 px-2">
                                    <h6>Versus {value.localized_name ?? ""}</h6>
                                    <div className="pt-2 flex flex-row">
                                        <div className="flex flex-row">
                                            <h6>games </h6>
                                            <h6>{value.games_played ? ` : ${value.games_played}` : ""}</h6>
                                        </div>
                                        <div className="flex flex-row px-3">
                                            <h6>wins </h6>
                                            <h6>{value.wins ?? ""}</h6>
                                        </div>
                                    </div>
                                </div>
                    })}
                </div>
            </div>
        </>
    )
    

    
}