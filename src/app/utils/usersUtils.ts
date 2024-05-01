import type { UserProfile } from "../about/utils/interfaces";


export class UserWrapper {
    readonly data: UserProfile[];

    constructor(usersData:UserProfile[]) {
        this.data = usersData
    }

    getUser(id:number) {
        const userObject = this.data.find((value,index) => value.id === id)
        return userObject ?? false
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