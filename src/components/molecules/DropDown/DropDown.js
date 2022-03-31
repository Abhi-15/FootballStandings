import React from "react";
import {useFetchStandingListData} from "../../customHooks/useFetchStandingListData";
import _ from 'lodash';

function DropDown(props){

	const keys = props.data.keys;
	const data = props.data.data;

	const dropDownList = _.map(keys, function(key, index){
		
		return <option key={index} value={data[key]}>{key}</option>	;
	})

	return <>
		{dropDownList}
	</>
}

export default DropDown;