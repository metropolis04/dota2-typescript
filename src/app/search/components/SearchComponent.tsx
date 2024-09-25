'use client'

import React, {FormEvent, useState, useEffect} from "react"
import { getFetch } from "@/app/utils/clientApi"
import type { ApiResponse } from "@/app/utils/apiTypes"
import type { UserProfile } from "@/app/matches/utils/interfaces"
import { PlayerSearched } from "./PlayerSearched"
import { UserWrapper } from "@/app/utils/usersUtils"
import { useAppSelector , useAppDispatch } from "@/app/reduxstore/hooks"
import { updatesearch } from "@/app/reduxstore/store"

export const SearchComponent:React.FunctionComponent = () => {

    const [name , setName] = useState<string>('')
    const [players, setPlayers] = useState<UserProfile[]>()
    const store = useAppSelector(state => state.search)
    const dispatch = useAppDispatch()
    
    
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
        getFetch<ApiResponse<UserProfile[]>>(name).then(data => {
            if (data.success) {
                // setPlayers([...data.data])
                dispatch(updatesearch({ players : {search : name , data : data.data}}))
            }
        })
    }
    const users = new UserWrapper(players)
    return (
        <>  
        <div className="flex flex-col pt-16">
            <h6>Seacrh players by a name :</h6>
            <div className="self-start">
                <form onSubmit={handleSubmit} >
                    <div className="flex flex-row items-end pb-2">
                        <div className="flex flex-col items-start">
                            <label htmlFor="player" className="block text-sm font-medium leading-6 text-gray-900">
                                Name
                            </label>
                            <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            name="player"
                            className= "block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <div className="ps-2">
                            <button className="bg-emerald-600 w-16 hover:bg-emerald-400 rounded h-9  font-medium text-red-50" >Search</button>
                        </div>
                     </div>
                </form>
            </div>
        </div>
        {store.players.data.length > 0 ?
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-x-4 gap-y-4 justify-items-stretch w-100 pt-4">
            {store.players.data.map((value,index) => {
                return  <PlayerSearched key={index} data={value} />
            })}
        </div> : null}
        </>
    )
}