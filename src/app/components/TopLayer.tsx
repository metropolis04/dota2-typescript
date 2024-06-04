import React from "react"
import { ContainerComponent } from "./ContainerComponent"
import ButtonsTopLayer from "./top_layer/ButtonsTopLayer"
import background_menu from '@/app/assets/background_menu.png'
import dota_2 from '@/app/assets/dota_2.png'
import Image from "next/image"

export const TopLayer:React.FunctionComponent = () => {

    const backImage = {
        backgroundImage: `url(${background_menu.src})`,
        height : 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center",
        maxHeight : '600px',
        backgroundSize: 'cover',
    }


    return (
        <>  
            <div className="w-full" style={backImage}>
                <ContainerComponent  >
                    <div className="flex pt-8 w-full" >
                        <ButtonsTopLayer />
                    </div>
                </ContainerComponent>
                {/* <div>
                    <Image src={dota_2.src} alt="dota" width={64} height={64} />
                </div> */}
            </div>
        </>
    )
}