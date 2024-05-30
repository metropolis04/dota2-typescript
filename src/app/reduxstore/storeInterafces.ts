import type { UserProfile } from "../matches/utils/interfaces";

export interface SearchStoreType {
    players : {
        search : string,
        data : UserProfile[]
    }
}