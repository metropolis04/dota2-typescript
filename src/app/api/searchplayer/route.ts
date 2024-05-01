import { type NextRequest } from 'next/server'



export async function GET(request :NextRequest) {
    
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('name')

    try {

        const res =  await fetch(`https://api.opendota.com/api/search?q=${query}` , {
            method : "GET",
            
        })
        
        if (!res.ok) {
            console.log(res)
            const data = await res.json()
            return new Response(JSON.stringify({ success : false , error : data ?? "error response"}) , {
                status : 404,
                
            })
        }

        const data = await res.json()
        
        return new Response(JSON.stringify({success : true , data}) , {
            status : 200,
            
        })

    }catch(error) {
        console.log(error)
        return new Response(JSON.stringify({success : false , error}) , {
            status : 500,
            
        })
    }
}