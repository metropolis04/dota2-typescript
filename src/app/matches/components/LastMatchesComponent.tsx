'use client'

import React, {useState} from "react"
import { MatchMediumComponent } from "./MatchMediumComponent/MatchMediumComponent"
import { LastMatchesFilters } from "./last_matches_components/LastMatchesFilters"
import { ProMatch } from "../utils/interfaces"
import MatchDetails from "../utils/matchUtils"
import useFilterStore from "@/app/utils/services/filterStoreService"
import { Pagination } from '@mui/material';
import Stack from '@mui/material/Stack';
import _ from "lodash";

export const LastMatchesComponent = ({data} : {  data : ProMatch[] }):React.JSX.Element => {

    const matches = new MatchDetails(data)
    const filterOptions = useFilterStore()
    const filterStore = filterOptions.getFilterStore()

    const handleChangePagination = (event:React.ChangeEvent<unknown>, valuePage:number) => {
        
        filterOptions.setPageOptions('page', valuePage);
        
    };

    return (
        <>  
            
            <div className="flex flex-col pt-12 animate-jumpViewDownMenu">
                <h6 className="text-3xl text-red-900 font-medium">Last matches</h6>
                    <LastMatchesFilters  matches={matches} />
                <div className="grid grid-cols-3 gap-x-8 gap-y-8 w-full pb-8 pt-4" >
                {matches.getSortedMatches().filter(value => value.league_name.includes(filterStore.lastmatches.league)).map((value,index) => {
                    return <div key={index} className="bg-white p-4" >
                                <MatchMediumComponent data={value} />
                            </div>
                }).slice(
                    [0].concat(_.range(0, 1200, filterStore.lm_settings.page_units))[filterStore.lm_settings.page],
                    [0].concat(_.range(0, 1200, filterStore.lm_settings.page_units))[filterStore.lm_settings.page + 1]
                  )}
                </div>
                <div className="pb-6 w-full flex flex-row justify-center">
                    <Stack spacing={2}>
                        <Pagination
                            count={Math.ceil(
                            matches.getSortedMatches().filter(value => value.league_name.includes(filterStore.lastmatches.league)).length / filterStore.lm_settings.page_units
                            )}
                            page={filterStore.lm_settings.page}
                            onChange={handleChangePagination}
                        />
                    </Stack>
                </div>
            </div>
        </>
    )
}