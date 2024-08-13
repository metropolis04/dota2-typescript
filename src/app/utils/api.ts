import { Fetch } from "@supabase/supabase-js/dist/module/lib/types";
import endpoints from "../endpoints";

interface apiInputs {
    name : string;
    url : string;
}

interface FetchOptions {
    cache? : boolean
}


const api = {


    getUsersByName : async function<T> (objectInput:apiInputs): Promise<T> {

        try {
            return fetch(`${objectInput.url}${objectInput.name}`, {
             method  : "GET",
            cache: 'no-store'
        }).then(res => {
            if (!res.ok) {
                console.log(res)
            }
            return res.json()}
            ).then(data => {
                if (data.error) {
                    return {success : false , error : data.error ?? "no error"} as T
                }
                return {success : true , data} as T
            })
        }catch(error) {
            console.log(error)
            return {success : false , error : "no error"} as T
            
        }
        
            
    },
    async getDotaApi<T>(url:string , options?:FetchOptions):Promise<T> {
        return fetch(`${endpoints.dotaApi}${url}` , {
             method : "GET",
             headers : {
                 'Content-Type' : 'application/json'
             },
             next : {revalidate : options && options.cache ? 300 : 0}
         }).then(res => {
             if (!res.ok) {
                 console.log(res)
                 return {success : false , error : "response error"} as T
             }
             return res.json()
         }).then(data => {
             if (data.error) {
                 return {success : false , error : data.error ?? "no error"} as T
             }
             return {success : true , data} as T
         })
     }

    
}

Object.freeze(api)
export default api