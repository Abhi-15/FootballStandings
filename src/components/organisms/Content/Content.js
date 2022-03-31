import React from "react";
import LeagueList from "../../molecules/LeagueList";
import {useFetchData} from "../../customHooks/useFetchData";
import Loader from '../../Loader';
import {setLeagues, getLeagues} from '../../../redux';
import {connect} from 'react-redux';

function Content(props){	

	const {data: leagues , isLoading} = useFetchData("https://api-football-standings.azharimm.site/leagues");

	if(!isLoading){
		props.setLeagues(leagues);
	}

	return (<div className="content">

		{ isLoading ? <Loader/> 
		            : <LeagueList leagues={props.leagues} /> }

	</div>);		
}

const mapStateToProps = state => {
	return {
		leagues: getLeagues(state),
	}
}
const mapDispatchToProps = dispatch => {
	return {
		setLeagues: (leagues) => dispatch(setLeagues(leagues)),
	}
}

export default connect(
mapStateToProps,
mapDispatchToProps
)(Content);