export interface UserProfile {
    account_id: number,
    personaname: string,
    avatarfull: string,
    [key:string] : string | number | boolean | null
}


export interface DotaUsers {
    profile: UserProfile,
}

export interface HeroObject {
    id : number;
    name : string;
    roles : string[];
    img : string;
    [heroInfo:string] : string | number | boolean | null | string[];
}

export interface Infohero {
    hero_id: string;
    games_played: number;
    wins: number;
}
