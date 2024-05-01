import React from "react"
import { SearchComponent } from "./components/SearchComponent"

export default async function SearchPage() {


    return (
        <>
            <div className="flex flex-row  justify-center border px-3 sm:px-0">
                <div className="flex flex-col sm:basis-1 sm:basis-3/4 justify-start ">
                    <SearchComponent />

                </div>
            </div>
        </>
    )
}