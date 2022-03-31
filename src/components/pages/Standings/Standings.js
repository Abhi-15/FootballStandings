import {useParams} from "react-router-dom";
import LeagueStanding from "../../organisms/LeagueStanding";
import React, {useEffect } from 'react';
import Header from "../../organisms/Header";
const axios = require('axios').default;

function Standings(){
	const {id} = useParams();

	return <>
		<LeagueStanding id={id}/>
	</>
}

export default Standings;