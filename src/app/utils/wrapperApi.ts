
class DotaApi {
    readonly url = 'https://api.opendota.com/api/'

   async getHeroMatches<T>(id:string):Promise<T> {
       return fetch(`${this.url}heroes/${id}/matchups` , {
            method : "GET",
            headers : {
                'Content-Type' : 'application/json'
            },
            cache: 'no-store'
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