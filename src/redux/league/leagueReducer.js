import {SET_LEAGUE_ID, SET_SEASON, SET_LEAGUES} from './leagueTypes';

const initialState = {
	leagueId: 'arg.1',
	season: '2021',
	leagues: [],
}

const leagueReducer = (state = initialState, action) => {

	switch(action.type){
		case SET_LEAGUE_ID: return {
			...state,
			leagueId: action.payload,
		}

		case SET_SEASON: return{
			...state,
			season: action.payload,
		}

		case SET_LEAGUES: return{
			...state,
			leagues: action.payload,
		}

		default: return state
	}
}

export default leagueReducer;