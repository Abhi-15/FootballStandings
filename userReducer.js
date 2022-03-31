import {USER_LOGIN, USER_LOGOUT, SET_USERNAME, SET_PASSWORD} from './userTypes';

const initialState = {
	isLoggedIn: false,
	username: null,
	password: null
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

		default: return state
	}
}

export default userReducer