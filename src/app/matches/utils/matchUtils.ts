import type { ProMatch } from "./interfaces"
import noLogoImage from "@/app/assets/question.png"
import team_secret_logo from "@/app/assets/teams/team_secret_logo.svg"
import _ from 'lodash';

const teamLogos = [
    {name : 'Team Secret' , logo : team_secret_logo }
]

class MatchDetails {
    readonly matches;

    constructor(matches : ProMatch[]) {
        this.matches = matches
    }

    getMatches() {
        return this.matches
    }

    getLastMatch() {
        return this.matches[this.matches.length - 1]
    }

    getMatchDate(match:ProMatch) {
        return new Date(match.start_time * 1000).toLocaleString()
    }

    getMatchDuration(match:ProMatch) {
        const minutes = Math.floor(match.duration / 60);
        const seconds = match.duration - minutes * 60;
        return `${minutes} min ${seconds} seconds`
    }

    getLogoObject(name:string) {
        const team =  teamLogos.find(value => value.name === name)
        return team ? team.logo : noLogoImage
    }

    getHotLeagues() {
        return _.uniqBy(this.matches , 'league_name')
    }

    getLeagueMatches(league:string) {
        return this.matches.filter(value => value.league_name === league)
    }

}

export default MatchDetails

