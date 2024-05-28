import React, { ReactNode } from "react"

interface Props {
    children : ReactNode;
    classes? : string;
}

export const ContainerComponent:React.FunctionComponent<Props> = (props) => {

    return (
        <>  
            <div className={`flex flex-row justify-center ${props.classes ?? ''}`}>
                <div className="flex flex-row basis:1/1 xl:basis-11/12 2xl:basis-3/4 justify-center max-w-screen-2xl w-100 px-6 lg:px-10 2xl:px-0" >
                    {props.children}
                </div>
            </div>
        </>
    )
}