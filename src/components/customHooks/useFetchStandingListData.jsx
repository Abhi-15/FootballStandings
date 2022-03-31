import {useEffect, useReducer, useState} from "react";
const axios = require('axios').default;

const initialState = {
    isLoading: true
};

function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {isLoading: true};
        case 'FINISHED':
            return {isLoading: false};
        default:
            return state;
    }
}

export const useFetchStandingListData = (url) => {

    const [data , assignData] = useState([]);
    const [state , dispatch] = useReducer(reducer, initialState);

    // console.log(url);

    useEffect(() => {
        dispatch({type:'LOADING'});
        axios.get(url)
            .then(response => {
               	assignData(response.data.data.standings);	
                dispatch({type:'FINISHED'});
            
                // console.log(url, response.data.data.standings);
            })
    },[url])

    // console.log(data);

    return {data, isLoading: state.isLoading};

    // return users;
}