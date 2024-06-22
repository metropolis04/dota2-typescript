'use client'

import React , {useState , useEffect} from "react"
import useFilterStore from "@/app/utils/services/filterStoreService"
import type { FilterStoreType } from "@/app/reduxstore/storeInterafces"
import MatchDetails from "../../utils/matchUtils"
import { useAppSelector } from "@/app/reduxstore/hooks"
import { ArrowDownFilter } from "@/app/components/icons"


export const FilterInput = ({type , matches , items} : {
    type    :   keyof FilterStoreType['lastmatches'] , 
    matches :   MatchDetails,
    items   :   string[],
}) => {

    const [showItems , setShowItems] = useState<boolean>(false)
    const filterStore = useFilterStore()
    const store = useAppSelector(state => state.filters)

    function closeSelect() {
        setTimeout(() => {
            setShowItems(false)
        },200)
    }
    
    return (
        <>
        <div className="inline-flex flex-row items-center bg-greenProject px-3 py-1 rounded ">
            <input
                className=" w-full cursor-pointer text-sm"
                type='button' 
                value={store.lastmatches[type] === "" ? "See all" : store.lastmatches[type] } 
                onClick={() => setShowItems(!showItems)}
                onBlur={() => closeSelect()}
                />
                <div style={{display:`${showItems ? "flex" : "none"}`}} className="flex-col p-4 rounded-lg animate-jumpViewDownMenu selectContainer  bg-white border">
                    <h6 onClick={() => filterStore.setLastMatchesFilters(type , "")} className="cursor-pointer hover:text-redProject pb-2">See all </h6>
                    {items.map((value,index) => {
                        return <h6 key={index} className="cursor-pointer pt-1 hover:text-redProject transition-colors" onClick={() => filterStore.setLastMatchesFilters(type , value)}>
                                    {value}
                                </h6>
                    })}
                </div>
                <div className="ps-2">
                    <ArrowDownFilter width="16px" height="16px"  />
                </div>
        </div>
        
        </>
    )
}