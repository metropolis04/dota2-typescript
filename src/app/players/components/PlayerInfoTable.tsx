import React from "react"
import type { ApiResponse } from "@/app/utils/apiTypes"
import api from "@/app/utils/api"

interface Props {
    playerId : string
}

interface DataWl {
    win : number;
    lose : number;
}

export const  PlayerInfoTable:React.FunctionComponent<Props> = async ({playerId}) => {

    const wldata = await api.getDotaApi<ApiResponse<DataWl>>(`players/${playerId}/wl`)

    if (wldata.success) {
        return (
            <>
                <div className="inline-flex flex-col items-start px-2 py-2">
                    <div>
                        <h6 className="text-xl font-medium">{wldata.data.win}</h6>
                    </div>
                    <div className="pt-2">
                        <h6 className="text-xl font-medium">{wldata.data.lose}</h6>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <h6>no data found</h6>
            </>
        )
    }

}