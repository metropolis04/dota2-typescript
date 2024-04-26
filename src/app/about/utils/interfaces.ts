export interface UserProfile {
    [key: string] : number | string | boolean | null
}

export interface DotaUsers {
    profile : UserProfile;
    [key:string] : UserProfile | number | string | boolean | null
}