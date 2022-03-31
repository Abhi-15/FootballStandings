import React from "react";
import {Navigate} from 'react-router-dom';

function SubmitForm(username, password){

	let flag = 1;

	const user = {
		username: username,
		password: password
	}

	let users = JSON.parse(localStorage.getItem('users'));

	if(users && users.length > 0){
		users.forEach((currentUser) => {

		if(user.username === currentUser.username){
			flag = 0;
			return ;
		}})
	}
	else{
		users = [];
	}

	if(flag){

		users.push(user);
		localStorage.setItem("users", JSON.stringify(users));
		localStorage.setItem(username, JSON.stringify(Array.apply(null, Array(20)).map(function (x, i) { return false; })));
	}	

	return (flag === 1);
}

export default SubmitForm;