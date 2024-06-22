export interface UserProfile {
    account_id: number,
    personaname: string,
    avatarfull: string,
    [key:string] : string | number | boolean | null
}

export interface ProMatch {

    match_id: number,
    duration: number,
    start_time: number,
    radiant_team_id: number,
    radiant_name : string,
    dire_team_id : number,
    dire_name : string,
    leagueid : number,
    league_name: string,
    series_id : number,
    series_type : number,
    radiant_score : number,
    dire_score : number,
    radiant_win : boolean,
    radiant : boolean
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

export interface ProMatchInfo {
    [key : string] : unknown
}


