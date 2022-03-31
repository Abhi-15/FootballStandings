import React from 'react';

function getArray(length, array, index){

	const tempArray =  Array.apply(null, Array(length)).map(function (x, i) { return array[i]; }); 
	tempArray[index] = !tempArray[index];

	return tempArray;
}

export default getArray;