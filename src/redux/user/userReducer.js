import {USER_LOGIN, USER_LOGOUT, SET_USERNAME, SET_PASSWORD, SET_FAVORITE_LEAGUES} from './userTypes';

const initialState = {
	isLoggedIn: false,
	username: "",
	password: "",
	favoriteLeagues: Array.apply(null, Array(20)).map(function (x, i) { return false; })
}

const userReducer = (state = initialState, action) => {

	switch(action.type){
		case USER_LOGIN: return{
			...state,
			isLoggedIn: action.payload
		}

		case USER_LOGOUT: return{
			...state,
			isLoggedIn: action.payload
		}

		case SET_USERNAME: return{
			...state,
			username: action.payload
		}

		case SET_PASSWORD: return{
			...state,
			password: action.payload
		}

		case SET_FAVORITE_LEAGUES: return{
			...state,
			favoriteLeagues: action.payload	
		}

		default: return state
	}
}

export default userReducer