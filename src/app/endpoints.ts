interface Endpoints {
    supabaseUrl : string,
    supabasePublicKey : string,
    [key:string] : string 
}


const endpoints:Endpoints = {
    dotaApi : 'https://api.opendota.com/api/',
    supabaseUrl : process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    supabasePublicKey : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
}
Object.freeze(endpoints)
export default endpoints