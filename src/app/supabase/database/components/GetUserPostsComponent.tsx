'use client'

import { ChangeEvent, useState, type ReactElement } from "react";


export default function GetUserPostsComponent():ReactElement {

    const [id, setId] = useState('')

    function handleSubmit(e:React.FormEvent) {
        e.preventDefault()
        if (id && id.toString().length > 0) {
            fetch('/api/getposts' , {
                method : "POST",
                body : JSON.stringify({id : Number.parseInt(id, 10)}),
                headers : {
                    "Content-Type": "application/json",
                }
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
        } else {
            console.log('empty inputs')
        }
    }

    return (
        <>
            <div className="flex justify-start w-full" >
                <form onSubmit={handleSubmit} >
                    <div className="flex flex-col" >
                        <div className="py-4" >
                            <h5>Search posts by id</h5>
                        </div>
                        <div>
                            <h6>ID</h6>
                            <input type="number" className="border px-2 py-2" name="id" onChange={(e) => setId(e.target.value)}  />
                        </div>
                        <button type="submit" >Get posts</button>
                    </div>
                </form>
            </div>
        </>
    )
}