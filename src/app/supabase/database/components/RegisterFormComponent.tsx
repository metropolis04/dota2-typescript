'use client'
import { useState } from "react"

export const RegisterFormComponent:React.FunctionComponent = () => {

    const [name, setName]   = useState('')
    const [email, setEmail] = useState('')
    

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        const form = e.currentTarget
        console.log(form)
        if (name.length > 0 && email.length > 0) {
            fetch('/api/adduser' , {
                method : "POST",
                body : JSON.stringify({name,email}),
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
            <div className=" w-full flex justify-start pt-12">
                <form onSubmit={handleSubmit} >
                    <div className="flex flex-col" >
                        <div className="py-4" >
                            <h5>Add new customer</h5>
                        </div>
                        <div className="flex flex-col" >
                            <h6>Email</h6>
                            <input className="border px-2 py-2" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="flex flex-col" >
                            <h6>Name</h6>
                            <input className="border px-2 py-2" type="text" name="name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <button type="submit" >Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}