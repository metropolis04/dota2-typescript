import React from "react"
import { supabaseApi } from "@/app/utils/supabaseApi"

export default async function SupabasePlayers() {

    const data = await supabaseApi.getPlayers()
    
    if (data) {
        return (
            <>
               {data.map((value,index) => {
                return <h6 key={index}>{value.name}</h6>
               })} 
            </>
        )
    }

    
}