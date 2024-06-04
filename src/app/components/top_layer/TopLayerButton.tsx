import React, { ReactElement } from "react"
import Link from "next/link"


export default function ButtonTopLayer({
    name , 
    url , 
    icon , 
    buttonUrl 
} : {
    name : string , 
    url : string | false , 
    icon?: ReactElement , 
    buttonUrl : string  
}):ReactElement {

    return (
        <>
        <div className={url === name.toLowerCase() ? 'w-44 py-4  d-flex items-center justify-center group bg-white rounded-t-lg ' : 'w-44 py-4 text-white d-flex items-center justify-center hover:bg-sky-700 group rounded-t-lg hover:bg-white'}>
            <div className="flex flex-row items-center justify-center">
                    <div className="w-8" >
                        {icon}
                    </div>
                    <Link href={buttonUrl}>
                        <span className={ name.toLowerCase() === url ? "font-medium text-lg text-redProject" : "font-medium text-lg group-hover:text-redProject text-white "} >{name}</span>
                    </Link>
            </div>
        </div> 
        </>
    )
}