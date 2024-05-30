import React from "react"
import type { HeroObject } from "@/app/matches/utils/interfaces"
import Link from "next/link"


interface Props {
    heroData : HeroObject
}

export const HeroComponent:React.FunctionComponent<Props> = ({heroData}) => {
    
    return (
        <>
            <div className="basis-1/8 lg:basis-1/4 py-4 px-4">
                <div className="text-3xl px-3 py-3 border hover:shadow-md cursor-pointer rounded">
                    <Link href={`/heroes/${heroData.id}`} prefetch={false} >
                        <h6 className="text-sm">{heroData.localized_name ?? ""}</h6>
                    </Link>
                </div>
            </div>
        </>
    )
}