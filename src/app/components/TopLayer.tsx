import React from "react"
import { ContainerComponent } from "./ContainerComponent"
import ButtonsTopLayer from "./top_layer/ButtonsTopLayer"

export const TopLayer:React.FunctionComponent = () => {

    return (
        <>  
            <ContainerComponent classes={`bg-redProject`} >
                <div className="flex pt-16 w-full bg-redProject" >
                    <ButtonsTopLayer />
                </div>
            </ContainerComponent>
        </>
    )
}