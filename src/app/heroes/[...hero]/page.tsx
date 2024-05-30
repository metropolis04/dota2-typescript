import React from "react"
import api from "@/app/utils/api"
import type { ApiResponse } from "@/app/utils/apiTypes"
import type { Infohero , HeroObject } from "@/app/matches/utils/interfaces"
import { InfoHeroComponent } from "../components/InfoHeroComponent"

export default async function HeroPage({params} : {params : {hero : string}}) {

    const heroId = params.hero[0]
    const heroData =  api.getDotaApi<ApiResponse<Infohero[]>>(`heroes/${heroId}/matchups`) 
    const heroesObject =  api.getUsersByName<ApiResponse<HeroObject[]>>({
        url : 'https://api.opendota.com/api/heroStats',
        name : ''
    })

    const [heroesWinsData , heroesObjectData ] = await Promise.all([heroData , heroesObject ])
    
    
    if (heroesWinsData.success && heroesObjectData.success ) {
        
        return (
            <>
                <InfoHeroComponent 
                    infoHero={heroesWinsData.data} 
                    heroesObjects={heroesObjectData.data}
                    heroId={heroId}
                />
            </>
        )
    } else {
        return <h6>No heroes found</h6>
    }

    
}