import React from "react";
import TypoGraphy from '../../atoms/TypoGraphy';
import _ from 'lodash';
import styles from './table.css';

function Table(props){

	const rows = props.row;
	const cols = props.col;

	const TableData = _.map(rows, function(dataObject, index){
		return <tr key={index}>
			{
				cols.map((column, index) => 				
				
				<td key={index} className={column.class}>
					{dataObject[column.key]}
				</td>		
			)}
		</tr>		
	})
	

	const TableHeading = <tr> 
		{
			_.map(cols, function(column, index){
				return <th key={index} className={column.class}>
					{column.heading}
				</th>;
			})		
		}
	</tr>

	return <table cellPadding="0" cellSpacing="0">
		<thead>
			{TableHeading}	
		</thead>
		<tbody>
			{TableData}
		</tbody>
	</table>
}

export default Table;