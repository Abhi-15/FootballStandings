import {useState, React} from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Standings from './pages/Standings';

import LeagueStanding from './organisms/LeagueStanding';
import FavoriteLeagues from './pages/FavoriteLeagues';
import AppSkeleton from './templates/AppSkeleton';
import TypoGraphy from './atoms/TypoGraphy';

const users = [];
let totalLeagues;

const userAndFavoriteLeagues = {};

function App(){

	return <Provider store={store}>
			<BrowserRouter>
				<AppSkeleton>		
					<Routes>

						<Route path='/' element={<Home/>} />
			          	<Route path='/Login' element={<Login />} />
			          	<Route path='/Signup' element={<Signup />} />
			          	<Route path='/FavoriteLeagues' element={<FavoriteLeagues/>} />

			          	<Route path='/:id' element={<Standings/>} />

			        </Routes>
				</AppSkeleton>

			</BrowserRouter>	
		</Provider>
}



const setLeagues = function(leagues){
	totalLeagues = leagues;
}

export {App, users, userAndFavoriteLeagues, totalLeagues, setLeagues};
