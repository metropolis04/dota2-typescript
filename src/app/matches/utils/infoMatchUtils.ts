import type { ProMatchInfo } from "./interfaces";


export class InfoMatchUtils {
    readonly infodata;

    constructor(data:ProMatchInfo) {
        this.infodata = data
    }

    getTeams() {
        if (this.infodata.players && Array.isArray(this.infodata.players) ) {
            return {
                radiant : this.infodata.players.filter(value => value.team_number === 0),
                dire    : this.infodata.players.filter(value => value.team_number === 1)
            }
        }
    }
}