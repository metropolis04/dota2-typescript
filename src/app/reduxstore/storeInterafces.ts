import type { UserProfile } from "../about/utils/interfaces";

export interface SearchStoreType {
    players : {
        search : string,
        data : UserProfile[]
    }
}