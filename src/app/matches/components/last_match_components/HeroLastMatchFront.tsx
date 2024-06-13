import React from "react"
import dota2heroes from "@/app/heroes/heroes";
import noLogoImage from "@/app/assets/question.png"
import projectUtils from "@/app/utils/projectUtils";

interface Props {
    data : unknown | undefined;
    heroObject? : typeof dota2heroes[0] 
}

export const HeroLastMatchFront:React.FunctionComponent<Props> = ({data , heroObject}) => {
    
    return (
        <>
            <div className="flex flex-col shadow">
                <div>
                    <img 
                        src={heroObject ? heroObject.image : noLogoImage.src} 
                        title={heroObject?.localized_name} 
                        alt="hero image" 
                        width={64} 
                        height={64}
                        className="w-20 h-auto" 
                        />
                </div>
                <div className="flex flex-col border pt-1">
                    <div className="flex flex-row px-2 py-1" >
                        <div >
                            <h6 className="font-semibold leading-none" >K</h6>
                        </div>
                        <div className="px-2">
                            <h6 className="text-base leading-none" >{projectUtils.getArgument(data , 'kills')}</h6>
                        </div>
                    </div>
                    <div className="flex flex-row px-2 py-1" >
                        <div >
                           <h6 className="font-semibold leading-none">D</h6> 
                        </div>
                        <div className="px-2">
                            <h6 className="leading-none">{projectUtils.getArgument(data , 'deaths')}</h6>
                        </div>
                    </div>
                    <div className="flex flex-row px-2 py-1" >
                        <div >
                           <h6 className="font-semibold leading-none">A</h6> 
                        </div>
                        <div className="px-2">
                            <h6 className="leading-none" >{projectUtils.getArgument(data , 'assists')}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}