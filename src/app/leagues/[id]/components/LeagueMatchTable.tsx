import { ReactElement } from "react";
import type { LeagueMatchType } from "../../types/lagueTypes";

export default function LeagueMatchTable({data} : {data : LeagueMatchType }):ReactElement {
    
    return (
        <>
            <div className="flex flex-row w-full" >
                
                    <div className="basis:1/4" >
                        {data.dire_team_id}
                    </div>
                    <div className="basis:1/4 ps-2" >
                        {data.radiant_team_id}
                    </div>
                
            </div>
        </>
    )
}