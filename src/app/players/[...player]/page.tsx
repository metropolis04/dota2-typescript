import React from "react"
import type { DotaUsers } from "@/app/about/utils/interfaces"
import api from "@/app/utils/api"
import type { ApiResponse } from "@/app/utils/apiTypes"
import type { UserProfile } from "@/app/about/utils/interfaces"

export default async function ProfilePage({ params }: { params: { player: string } }) {

    const playerId = params.player[0]
    
    const playerData = await api.getUsersByName<ApiResponse<Omit<DotaUsers , 'account_id'>>>({
        url : 'https://api.opendota.com/api/players/',
        name : playerId ,
    })

    
    if (playerData.success) {

        return (
            <>
                <div className="inline-flex flex-col items-center basis-0 border">
                    {playerData.data.profile && 
                    <div className="w-52 h-auto flex items-center justify-center">
                        <img src={playerData.data.profile.avatarfull} className="w-100 h-auto object-cover rounded-[50%]" />
                    </div>}
                    <div className="pt-1.5">
                        <h6>{playerData.data.profile.personaname}</h6>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <h6>Profile not found</h6>
            </>
        )
    }
    
}