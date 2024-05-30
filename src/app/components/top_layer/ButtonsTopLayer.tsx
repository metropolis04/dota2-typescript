'use client'

import React, { ReactElement } from "react"
import Link from "next/link"
import { JoystickIcon } from "../icons"
import stylesjs from "@/stylesjs"
import { usePathname } from 'next/navigation'

export default function ButtonsTopLayer():ReactElement {

    const pathname = usePathname() 
    const url = pathname ? pathname.split('/') ? pathname.split('/')[1] : false : false
    
    
   return (
    <>
        <div className={url && url === 'matches' ? stylesjs.buttons.menuActive : stylesjs.buttons.menuUnactive}>
            <div className="flex flex-row items-center justify-center text-brown-800 ">
                    <div className="w-8" ><JoystickIcon width="18" height="18" class={url && url === 'matches' ? stylesjs.buttons.spanMenuActive : stylesjs.buttons.spanMenuUnactive}  /></div>
                    <Link href="/matches">
                        <span className={url && url === 'matches' ? stylesjs.buttons.spanMenuActive : stylesjs.buttons.spanMenuUnactive} >Matches</span>
                    </Link>
            </div>
        </div>
        <div className={url && url === 'heroes' ? stylesjs.buttons.menuActive : stylesjs.buttons.menuUnactive}>
            <div className="flex flex-row items-center justify-center text-brown-800">
                <Link href="/heroes">
                    <span className={url && url === 'heroes' ? stylesjs.buttons.spanMenuActive : stylesjs.buttons.spanMenuUnactive} >Heroes</span>
                </Link>
            </div>
        </div>
        <div className={url && url === 'search' ? stylesjs.buttons.menuActive : stylesjs.buttons.menuUnactive}>
            <div className="flex flex-row items-center justify-center text-brown-800">
                <Link href="/search">
                    <span className={url && url === 'search' ? stylesjs.buttons.spanMenuActive : stylesjs.buttons.spanMenuUnactive} >Players</span>
                </Link>
            </div>
        </div>
        <div className={url && url === 'supabase' ? stylesjs.buttons.menuActive : stylesjs.buttons.menuUnactive}>
            <div className="flex flex-row items-center justify-center text-brown-800">
                <Link href="/supabase">
                    <span className={url && url === 'supabase' ? stylesjs.buttons.spanMenuActive : stylesjs.buttons.spanMenuUnactive} >Supabase</span>
                </Link>
            </div>
        </div>
    </>
   )

}