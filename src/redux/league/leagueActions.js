import {SET_LEAGUE_ID, SET_SEASON, SET_LEAGUES} from './leagueTypes';

export const setLeagueId = (id) => {
	return {
		type: SET_LEAGUE_ID,
		payload: id,
	}
}

export const setSeason = (season) => {
	return {
		type: SET_SEASON,
		payload: season,
	}
}

export const setLeagues = (leagues) => {
	return {
		type: SET_LEAGUES,
		payload: leagues,
	}
}