import React from "react"
import Link from "next/link"

export default async function SupabasePage() {

    return (
        <>
            <div className="flex w-100 border pt-16 bg-gray-100" >
                <div className="px-3 w-32">
                <Link href="/supabase/players">Players</Link>
                </div>
            </div>
        </>
    )
}