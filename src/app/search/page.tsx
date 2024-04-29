import React from "react"
import { SearchComponent } from "./components/SearchComponent"

export default async function SearchPage() {


    return (
        <>
            <div className="flex flex-row  justify-center border">
                <div className="flex flex-row basis-3/4 justify-start ">
                    <SearchComponent />

                </div>
            </div>
        </>
    )
}