import React , {Suspense} from "react"
import type { DotaUsers } from "@/app/matches/utils/interfaces"
import api from "@/app/utils/api"
import type { ApiResponse } from "@/app/utils/apiTypes"
import { PlayerInfoTable } from "../components/PlayerInfoTable"

export default async function ProfilePage({ params }: { params: { player: string } }) {

    const playerId = params.player[0]
    
    const playerData = await api.getUsersByName<ApiResponse<DotaUsers>>({
        url : 'https://api.opendota.com/api/players/',
        name : playerId ,
    })

    
    if (playerData.success) {
        
        return (
            <>
                <div className="flex flex-row justify-center">
                    <div className="inline-flex flex-row justify-start py-4 bg-fuchsia-100 rounded-2xl ps-4 mt-12 basis-1/1 md:basis-3/4 border">
                        {playerData.data.profile && 
                        <div className="inline-flex flex-col items-center w-100 bg-white py-2 px-2 rounded-2xl shadow-md">
                            <div className="w-52 h-auto flex items-center justify-center">
                                <img src={playerData.data.profile.avatarfull} className="w-100 h-auto object-cover rounded-[50%]" />
                            </div>
                            <div className="pt-1.5">
                                <h6>{playerData.data.profile.personaname}</h6>
                            </div>
                        </div>}
                        <div className="inline-flex flex-col ml-4 h-32 items-center w-100 bg-white py-2 px-2 rounded-2xl shadow-md">
                            <Suspense fallback={<h6>Loading...</h6>} >
                                <PlayerInfoTable playerId={playerId} />
                            </Suspense>
                        </div>
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