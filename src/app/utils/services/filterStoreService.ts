import { useAppSelector, useAppDispatch } from "@/app/reduxstore/hooks"
import { updatesfilters } from "@/app/reduxstore/store"
import type { FilterStoreType } from "@/app/reduxstore/storeInterafces"

const useFilterStore = () => {

    const filterStore:FilterStoreType = useAppSelector(state => state.filters)
    const dispatch = useAppDispatch()

    type LastMatchesFilter = typeof filterStore.lastmatches

    function setLastMatchesFilters(type:keyof LastMatchesFilter , value:string) {
        
        const filterObject:LastMatchesFilter = JSON.parse(JSON.stringify(filterStore.lastmatches))
        filterObject[type] = value
        dispatch(updatesfilters({...filterStore , lastmatches : {...filterObject}}))
    }

    function getFilterStore():FilterStoreType {
        return filterStore
    }

    return {
        setLastMatchesFilters,
        getFilterStore
    }
}

export default useFilterStore