import type { UserProfile } from "../matches/utils/interfaces";

export interface SearchStoreType {
    players : {
        search : string;
        data : UserProfile[];
    }
}

export interface FilterStoreType {
    lastmatches : {
        league : string;
        duration : string;
        team : string;
        teamName : string;
    },
    lm_settings : {
        page_units : number;
        page : number;
    }
}