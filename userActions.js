import {USER_LOGIN, USER_LOGOUT, SET_USERNAME, SET_PASSWORD} from './userTypes';

export const userLogin = (isLoggedIn) => {
	return {
		type: USER_LOGIN,
		payload: isLoggedIn
	}
}

export const userLogout = (isLoggedIn) => {
	return {
		type: USER_LOGOUT,
		payload: isLoggedIn
	}
}

export const setUserName = (username) => {
	return {
		type: SET_USERNAME,
		payload: username
	}
}

export const setPassword = (password) => {
	return {
		type: SET_PASSWORD,
		payload: password
	}
}