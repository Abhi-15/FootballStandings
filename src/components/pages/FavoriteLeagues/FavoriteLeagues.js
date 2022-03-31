import React from "react";
import {Link} from 'react-router-dom';

import Header from '../../organisms/Header';
import TypoGraphy from '../../atoms/TypoGraphy';
import {userAndFavoriteLeagues, totalLeagues} from "../../App";
import {connect} from 'react-redux';
import {getUsername} from '../../../redux';

import styles from './favoriteLeagues.css';
import _ from 'lodash';

function FavoriteLeagues(props){

	const user = props.user;
	const myFavoriteLeagues = JSON.parse(localStorage.getItem(user));
	
	const favoriteLeagues = _.map(myFavoriteLeagues, function(isFavorite, index){
		if(isFavorite)
		{
			const league = totalLeagues[index];

			return <Link to={'/' + league.id} className="box" key={league.id}>

				<div className="flexBox widthFull leagueHeading">
					<TypoGraphy 
						text={league.name}
						class='leagueNames widthFull'
					/>	
				</div>
				
				<img src={league.logos.light} className="leagueLogos" />
			</Link>	;
		}
	})


	return <>
		<div className="content">
			<div className="flexBox">
				{favoriteLeagues}
			</div>
		</div>		
	</>;

	
}	

const mapStateToProps = state => {
    return {
        user: getUsername(state),
    }
}

export default connect(
 mapStateToProps
)(FavoriteLeagues);