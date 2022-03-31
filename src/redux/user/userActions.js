import {USER_LOGIN, USER_LOGOUT, SET_USERNAME, SET_PASSWORD, SET_FAVORITE_LEAGUES} from './userTypes';

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

export const setFavoriteLeagues = (favoriteLeagues) => {
	return {
		type: SET_FAVORITE_LEAGUES,
		payload: favoriteLeagues
	}
}