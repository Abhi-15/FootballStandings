import {useState, React} from "react";
import {createSelector} from 'reselect';
import {connect} from 'react-redux';
import {useNavigate} from "react-router-dom";
import Table from "../../molecules/Table";
import {useFetchStandingListData} from "../../customHooks/useFetchStandingListData";
import DropDown from "../../molecules/DropDown";
import {dropDownLeagueMenu, dropDownSeasonMenu} from "../../helper/DropDownData";
import {setLeagueId, setSeason, getSeason, getLeagueId} from '../../../redux';

import Loader from "../../Loader";
import styles from './leagueStanding.css'

import {getTableData} from "../../helper/getTableData";

const axios = require('axios').default;

function LeagueStanding(props){

	// console.log('in LeagueStanding');
    const navigate = useNavigate();
	const leagueId = props.leagueId;
	const season = props.season;

	let rowData, columnData;
    const url = "https://api-football-standings.azharimm.site/leagues/" + props.id + "/standings?season=" + season + "&sort=asc";
	const {data, isLoading} = useFetchStandingListData(url);

	if(!isLoading){
		// console.log(data);
		const tableData = getTableData(data);
		rowData = tableData.rowData;
		columnData = tableData.columnData;
	}

	return <div className="standings">

		<div className="dropDownBox">
			<select className="dropDown" value={props.id} onChange={(event) => {props.setLeagueId(event.target.value); navigate('/' + event.target.value);}}>
				<DropDown data={dropDownLeagueMenu}/>
			</select>
		</div>

		<div className="dropDownBox">
			<select className="dropDown" value={season} onChange={(event) => props.setSeason(event.target.value)}>
				<DropDown data={dropDownSeasonMenu}/>
			</select>		
		</div>

		{(isLoading) ? <Loader /> : <Table row={rowData} col={columnData}/>} 

	</div>
	
}

const mapStateToProps = state => {
	return {
		leagueId: getLeagueId(state),
		season: getSeason(state),
	}
}

const mapDispatchToProps = dispatch => {
    return {
    	setLeagueId: (id) => dispatch(setLeagueId(id)),
    	setSeason: (season) => dispatch(setSeason(season)),
    }
}

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(LeagueStanding);