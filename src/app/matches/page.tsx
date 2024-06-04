import React , {Suspense} from "react"
import { ContainerComponent } from "../components/ContainerComponent";
import { MatchesFront } from "./components/MatchesFront";
      
export default async function AboutPage() {

    
    return (
        <>
            <div className="flex flex-col w-full">
                <div className="h-full">
                    <ContainerComponent classes="h-100" >
                        <div className="w-full flex flex-row justify-start items-center h-full py-4">
                            <div className="px-2">
                                <h6 className="text-redProject cursor-pointer text-sm" >Dashboard</h6>
                            </div>
                            <div className="px-2">
                                <h6 className="text-redProject cursor-pointer text-sm" >Filter</h6>
                            </div>
                        </div>
                    </ContainerComponent>
                </div>
                <div className="w-fyll bg-stone-100">
                    <Suspense fallback={<h6>Loading...</h6>} >
                        <MatchesFront />
                    </Suspense>
                </div>
            </div>
        </>
    )

    
}