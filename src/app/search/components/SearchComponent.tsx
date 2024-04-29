'use client'

import React, {FormEvent, useState} from "react"


export const SearchComponent:React.FunctionComponent = () => {

    const [name , setName] = useState<string>('')

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
        console.log(name)
    }

    return (
        <>  
        <div className="flex flex-col pt-16">
            <h6>Seacrh player by name :</h6>
            <div className="self-start">
                <form onSubmit={handleSubmit} >
                    <div className="flex flex-col items-start">
                        <label htmlFor="player" className="block text-sm font-medium leading-6 text-gray-900">
                            Price
                        </label>
                        <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        name="player"
                        className= "block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                </form>
            </div>
        </div>
        </>
    )
}