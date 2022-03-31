import {useState, React} from "react";
import {createSelector} from 'reselect';
import {Link} from 'react-router-dom';
import {Loggedin, userAndFavoriteLeagues, setLeagues} from "../../App";
import Modal from '../../Modal';
import TypoGraphy from '../../atoms/TypoGraphy';
import {connect} from 'react-redux';
import {userLogin, setUserName, setFavoriteLeagues, setLeagueId} from '../../../redux';
import getArray from '../../helper/getArray';
import styles from './leagueList.css'
import {getLoginStatus, getUsername, getFavoriteLeagues, getLeagueId} from '../../../redux';
import _ from 'lodash';

const portal = document.getElementById('portal');

function LeagueList(props){

	const array = Array.apply(null, Array(20)).map(function (x, i) { return false; });

	const user = props.username;
	const favoriteLeagues = props.isLoggedIn ? JSON.parse(localStorage.getItem(user)) : array;
	const [modalShow, setModalShow] = useState(false);

	const changeModalState = (value) => {
		if(value) {
			portal.style.display = 'block';
		}
		else{
			portal.style.display = 'none';
		} 

		setModalShow(value);
	}

	const leagues = props.leagues;

	setLeagues(leagues);

	function onClick(event, index){
		event.stopPropagation();

		if(!props.isLoggedIn){
			changeModalState(true);
			return ;
		}
		
		favoriteLeagues[index] = !favoriteLeagues[index];
		localStorage.setItem(user, JSON.stringify(favoriteLeagues));
		props.setFavoriteLeagues(favoriteLeagues);
	}

	return (<div className="flexBox">
		{
			_.map(leagues, function(league, index){

				return <Link to={'/' + league.id} className="box" key={league.id}>
				
					<div className="flexBox widthFull leagueHeading">
						<TypoGraphy 
							text={league.name}
							class='leagueNames'
						/>
						<div className="inputClass">
							
							<input checked={favoriteLeagues[index]} className="star" type="checkbox" onChange={() => {}}
							onClick={(event) => onClick(event, index)} value={favoriteLeagues[index]} />
					      
						</div>		
					</div>
					<img src={league.logos.light} className="leagueLogos" />

				</Link>		
			})
		}

		<Modal open={modalShow} onClose={() => changeModalState(false) }>
			You are not Logged In !!
	    </Modal>

	</div>);

}

const mapStateToProps = state => {

	return {
		isLoggedIn: getLoginStatus(state),
		username: getUsername(state),
		leagueId: getLeagueId(state),
		favoriteLeagues: getFavoriteLeagues(state),
	}
	
}

const mapDispatchToProps = dispatch => {
    return {
        setFavoriteLeagues: (favoriteLeagues) => dispatch(setFavoriteLeagues(favoriteLeagues)), 
    }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LeagueList)