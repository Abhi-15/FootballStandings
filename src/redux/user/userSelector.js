import React from 'react';
import {createSelector} from 'reselect';

export const getLoginStatus = state => state.user.isLoggedIn;
export const getUsername = state => state.user.username;
export const getPassword = state => state.user.password;
export const getFavoriteLeagues = state => state.user.favoriteLeagues;

