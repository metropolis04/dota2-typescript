


export async function getFetch<T> (name:string):Promise<T>  {

    return fetch(`/api/searchplayer?name=${name}` , {
        method : "GET"
    }).then(res => res.json())
    
}