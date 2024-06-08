import React from "react"
import { supabaseApi } from "@/app/utils/supabaseApi"
export const dynamic = 'force-dynamic'
import { cookies } from 'next/headers'

export default async function SupabasePlayers() {

    const cookieStore = cookies()

    const data = await supabaseApi.getPlayers()
    
    if (data) {
        return (
            <>
               {data.map((value,index) => {
                return <div key={index} className="flex w-80 border"><h6 >{value.name}</h6></div>
               })} 
            </>
        )
    }

    
}