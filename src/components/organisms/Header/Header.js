import React from "react";
import {Link} from 'react-router-dom';
import {createSelector} from 'reselect';
import styles from './header.css';
import {connect} from 'react-redux';
import {userLogin, setUserName, setPassword, getLoginStatus} from '../../../redux';
import TypoGraphy from '../../atoms/TypoGraphy';

function Header(props){

	let rightSideContent;
	const isLoggedIn = props.isLoggedIn;

	if(isLoggedIn){
		rightSideContent = <div className='flexBox'>
			<div className='rightSideLinks'>
				<Link to="/FavoriteLeagues">
					<TypoGraphy 
						text='FavoriteLeagues'
						class='headerLinks'
					/>
				</Link>

				<Link to="/">
					<TypoGraphy 
						text='Logout'
						class='headerLinks'
						onClick={() => {props.userLogin(false); props.setUserName(""); props.setPassword("");}}
					/>
				</Link>
			</div>

			<div className="dropDownMenu">
	            <button className="dropDownButton"> DropDown </button>
	            
	            <div className="dropDownContent">

					<Link to="/">
						<TypoGraphy  
							text='Football Standing'
							class='dropDownLinks'
						/>
					</Link>

					<Link to="/FavoriteLeagues">
						<TypoGraphy 
							text='FavoriteLeagues'
							class='dropDownLinks'
						/>
					</Link>

					<Link to="/">
						<TypoGraphy 
							text='Logout'
							class='dropDownLinks'
							onClick={() => {props.userLogin(false); props.setUserName(""); props.setPassword("");}}
						/>
					</Link>	                
	            </div>
        	</div>
		</div>
	}
	else{
		rightSideContent = <div className='flexBox'>
			<div className='rightSideLinks'>
				<Link to="/Login">
					<TypoGraphy 
						text='Login'
						class='headerLinks'
					/>
				</Link>	
				<Link to="/Signup">
					<TypoGraphy 
						text='SignUp'
						class='headerLinks'
					/>
				</Link>				
			</div>

			<div className="dropDownMenu">
	            <button className="dropDownButton"> DropDown </button>
	            
	            <div className="dropDownContent">
					<Link to="/">
						<TypoGraphy  
							text='Football Standing'
							class='dropDownLinks'
						/>
					</Link>
					<Link to="/Login">
						<TypoGraphy 
							text='Login'
							class='dropDownLinks'
						/>
					</Link>	
					<Link to="/Signup">
						<TypoGraphy 
							text='SignUp'
							class='dropDownLinks'
						/>
					</Link>	                
	            </div>
        	</div>
		</div>
	}

	return <div className="header">
		<div className='rightSideLinks'>
			<Link to="/">
				<TypoGraphy  
					text='Football Standing'
					class='headerLinks'
				/>
			</Link>
		</div>

		{rightSideContent}
	</div>
}

const mapStateToProps = state => {

	return {
		isLoggedIn: getLoginStatus(state),
	}

}

const mapDispatchToProps = dispatch => {
    return {
        userLogin: (isLoggedIn) => dispatch(userLogin(isLoggedIn)),
        setUserName: (username) => dispatch(setUserName(username)),
        setPassword: (password) => dispatch(setPassword(password))
    }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header)