import React from "react"
import api from "../utils/api"
import type { ApiResponse } from "../utils/apiTypes"
import type { HeroObject } from "../about/utils/interfaces"
import { HeroComponent } from "./components/HeroComponent"

export default async function HeroesPage() {

    const heroesObject = await api.getUsersByName<ApiResponse<HeroObject[]>>({
        url : 'https://api.opendota.com/api/heroStats',
        name : ''
    })
    
    if (heroesObject.success) {
        return (
            <>
                <div className="flex flex-row flex-wrap">
                    {heroesObject.data.map((value,index) => <HeroComponent key={index} heroData={value}  /> )}
                </div>
            </>
        )
    } else {
        return (
            <>
                <h6>Heroes data not found</h6>
            </>
        )
    }

    
}