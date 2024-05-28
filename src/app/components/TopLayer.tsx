import React from "react"
import Link from "next/link"
import { ContainerComponent } from "./ContainerComponent"
import { raleway } from "../layout"

export const TopLayer:React.FunctionComponent = () => {

    return (
        <>  
            <ContainerComponent classes={`bg-greenProject ${raleway.className}`} >
                <div className="flex pt-16 bg-gray-100 w-full bg-greenProject" >
                    <div className="px-3 w-32 pb-2">
                        <div>
                            <Link href="/about">
                                <span className="font-medium text-lg text-white hover:text-brown-400" >About</span>
                            </Link>
                        </div>
                    </div>
                    <div className="px-3 w-32">
                        <div>
                            <Link href="/heroes">
                                <span className="font-medium text-lg text-white hover:text-brown-400" >Heroes</span>
                            </Link>
                        </div>
                    </div>
                    <div className="px-3 w-32">
                        <div>
                            <Link href="/search">
                                <span className="font-medium text-lg text-white hover:text-brown-400" >Search</span>
                            </Link>
                        </div>
                    </div>
                    <div className="px-3 w-32">
                        <div>
                            <Link href="/supabase">
                                <span className="font-medium text-lg text-white hover:text-brown-400" >Supabase</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </ContainerComponent>
        </>
    )
}