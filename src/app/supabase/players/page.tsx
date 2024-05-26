import React from "react"
import { supabaseApi } from "@/app/utils/supabaseApi"
export const dynamic = 'force-dynamic'
import { cookies } from 'next/headers'

export default async function SupabasePlayers() {

    const cookieStore = cookies()
    
    const data = await supabaseApi.getPlayers()
    console.log(data)
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