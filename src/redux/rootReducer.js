import {combineReducers} from 'redux';
import userReducer from './user/userReducer';
import leagueReducer from './league/leagueReducer';

const rootReducer = combineReducers({
	league: leagueReducer,
	user: userReducer
});

export default rootReducer;
