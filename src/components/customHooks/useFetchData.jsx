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

export const useFetchData = (url) => {

    const [data , assignData] = useState([]);
    const [state , dispatch] = useReducer(reducer, initialState);

    // console.log(data);

    useEffect(() => {
        dispatch({type:'LOADING'});
        axios.get(url)
            .then(response => {
               	assignData(response.data.data);
                dispatch({type:'FINISHED'});	
            })
    },[])

    return {data, isLoading: state.isLoading};
}