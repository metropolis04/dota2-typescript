

const api = {

    getUsersByName : async function<T> (name:string): Promise<T> {

        try {
            return fetch(`https://api.opendota.com/api/search?q=${name}`, {
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
}

export default api