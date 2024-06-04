import React from "react"
import Link from "next/link"
import { ContainerComponent } from "../components/ContainerComponent"

export default async function SupabasePage() {

    return (
        <>  
            <ContainerComponent>
                <div className="flex w-full pt-16" >
                    <div className="px-3 w-32">
                        <Link href="/supabase/players">Players</Link>
                    </div>
                </div>
            </ContainerComponent>
        </>
    )
}