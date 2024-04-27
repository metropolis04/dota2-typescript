export interface UserProfile {
    account_id: number,
    personaname: string,
    avatarfull: string,
    [key:string] : string | number | boolean | null
}


export interface DotaUsers {
    profile: UserProfile,
}
