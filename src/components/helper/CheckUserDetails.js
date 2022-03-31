import React from "react";
import _ from 'lodash';
import {Navigate} from 'react-router-dom';

function CheckUserDetails(username, password){

	let flag;

	const user = {
		username: username,
		password: password
	}

	const users = JSON.parse(localStorage.getItem('users'));

	if(users && users.length > 0){

		_.map(users, function(currentUser){
			if(user.username === currentUser.username){
				if(user.password === currentUser.password){
					flag = 1;
				}
				else{
					flag = 0;
				}

				return ;
			}	
		})
	}
	
	return (flag === 1);
}

export default CheckUserDetails;
