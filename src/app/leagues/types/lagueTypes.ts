export interface LeagueType {

    "leagueid": number,
    "ticket": string,
    "banner": string,
    "tier": string,
    "name": string
}

export interface LeagueMatchType {
    "match_id": number,
    "duration": number,
    "start_time": number,
    "radiant_team_id": number,
    "radiant_name": string,
    "dire_team_id": number,
    "dire_name": string,
    "leagueid": number,
    "league_name": string,
    "series_id": number,
    "series_type": number,
    "radiant_score": number,
    "dire_score": number,
    "radiant_win": boolean,
    "radiant": boolean
}

export interface LeagueTeamType {
    "team_id": boolean,
    "rating": boolean,
    "wins": boolean,
    "losses": boolean,
    "last_match_time": boolean,
    "name": string,
    "tag": string,
}