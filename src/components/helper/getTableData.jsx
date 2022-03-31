import React from "react";
import _ from 'lodash';

export const getTableData = function(data){
	
	const rows = data;
	const rowData = [], columnData = [8];

	_.forEach(rows, function(row){
		const object = {
	    	"teamName": row.team.name,
	    	"abbreviation": row.team.abbreviation,
	    	"win": row.stats[0].value,
	    	"loose": row.stats[1].value,
	    	"draw": row.stats[2].value,
	    	"matchesPlayed": row.stats[3].value,
	    	"goalsFor": row.stats[4].value,
	    	"goalsAgainst": row.stats[5].value,
	    	"totalPoints": row.stats[6].value
	    }
	    
	    rowData.push(object);
	})

	columnData[0] = {
		'heading': 'Team',
		'key': 'teamName',
		'class': 'teamName'
	}

	columnData[1] = {
		'heading': 'Team',
		'key': 'abbreviation',
		'class': 'smallTeamName'
	}

	columnData[2] = {
		'heading': 'W',
		'key': 'win',
		'class': 'win'
	}

	columnData[3] = {
		'heading': 'L',
		'key': 'loose',
		'class': 'loose'
	}

	columnData[4] = {
		'heading': 'D',
		'key': 'draw',
		'class': 'tie'
	}

	columnData[5] = {
		'heading': 'MP',
		'key': 'matchesPlayed',
		'class': 'gamesPlayed'
	}

	columnData[6] = {
		'heading': 'GF', 
		'key': 'goalsFor',
		'class': 'goalsFor'
	}

	columnData[7] = {
		'heading': 'GA', 
		'key': 'goalsAgainst',
		'class': 'goalsAgainst'
	}

	columnData[8] = {
		'heading': 'Pts',
		'key': 'totalPoints',
		'class': 'totalPoints'
	}

	return {rowData, columnData};
}