import api from "@/app/utils/api"
import type { ApiResponse } from "@/app/utils/apiTypes"
import type { 
    LeagueType,
    LeagueMatchType,
    LeagueTeamType
} from "../types/lagueTypes"
import { ContainerComponent } from "@/app/components/ContainerComponent"
import LeagueMatchTable from "./components/LeagueMatchTable"

export default async function LeaguePage({params} : {params : {id : string}}) {

    const leagueData =  api.getDotaApi<ApiResponse<LeagueType>>(`leagues/${params.id}` , { cache : true })
    const leagueMatches =  api.getDotaApi<ApiResponse<LeagueMatchType[]>>(`leagues/${params.id}/matches` , { cache : true })
    const leagueTeams =  api.getDotaApi<ApiResponse<LeagueTeamType[]>>(`leagues/${params.id}/teams` , { cache : true })
    const [league, matches, teams] = await Promise.all([leagueData, leagueMatches, leagueTeams ])
    
    if (league.success) {
        
        return (
            <>
                <div>
                    <ContainerComponent>
                        <div className="flex flex-col w-full">
                            <div className="w-full">
                                <h6>{league.data.name}</h6>
                            </div>
                            <div className="flex flex-col w-full" >
                                
                                {matches.success ? matches.data.map((value,index) => <LeagueMatchTable key={index} data={value} />) : null}
                                
                                {/* <div>
                                    {teams.success ? 
                                    <div>
                                        {teams.data.map((value,index) => <h6 key={index} >{value.name}</h6>)}
                                    </div>: null}
                                </div> */}
                            </div>
                        </div>
                    </ContainerComponent>
                </div>
            </>
        )
    } else {
        return <h6>Not league data</h6>
    }

    
}