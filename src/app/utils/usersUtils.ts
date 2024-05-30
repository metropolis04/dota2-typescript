import type { UserProfile } from "../matches/utils/interfaces";


export class UserWrapper<T> {
    readonly data: T;

        constructor(usersData:T) {
        this.data = usersData
    }

    getUser(id:number) {
        if (Array.isArray(this.data)) {
            const userObject = this.data.find((value,index) => value.id === id)
            return userObject ?? false
        }
        
        
    }

    getAllUsers() {
        return this.data
    }

}

export class PlayerWrapper<T extends UserProfile> {
    private data;

    constructor(value:T) {
        this.data = value
    }

    getName() {
        return this.data.personaname
    }
}