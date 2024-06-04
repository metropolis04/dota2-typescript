'use client'

import React, { ReactElement } from "react";
import Link from "next/link";
import { JoystickIcon , UnityIcon , PlayersIcon , BaseIcon } from "../icons";
import stylesjs from "@/stylesjs";
import { usePathname } from 'next/navigation';
import ButtonTopLayer from "./TopLayerButton";

export default function ButtonsTopLayer():ReactElement {

    const pathname = usePathname() 
    const url =  pathname.split('/') ? pathname.split('/')[1] : false 
    
    
   return (
    <>
        <ButtonTopLayer 
            name="Matches" 
            buttonUrl='/matches' 
            url={url} 
            icon={<JoystickIcon width="18" height="18" class={url && url === 'matches' ? 'font-medium text-lg text-redProject' : 'font-medium text-lg text-white group-hover:text-redProject'}  />}  
        />
        <ButtonTopLayer 
            name="Heroes" 
            buttonUrl='/heroes' 
            url={url} 
            icon={<UnityIcon width="18" height="18" class={url && url === 'heroes' ? 'font-medium text-lg text-redProject' : 'font-medium text-lg text-white group-hover:text-redProject'}  />}  
        />
        <ButtonTopLayer 
            name="Search" 
            buttonUrl='/search' 
            url={url} 
            icon={<PlayersIcon width="18" height="18" class={url && url === 'search' ? 'font-medium text-lg text-redProject' : 'font-medium text-lg text-white group-hover:text-redProject'}  />}  
        />
        <ButtonTopLayer 
            name="Supabase" 
            buttonUrl='/supabase' 
            url={url} 
            icon={<BaseIcon width="18" height="18" class={url && url === 'supabase' ? 'font-medium text-lg text-redProject' : 'font-medium text-lg text-white group-hover:text-redProject'}  />}  
        />
    </>
   )

}