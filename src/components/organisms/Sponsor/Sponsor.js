import React from "react";
import styles from './sponsor.css';

function Sponsor(){

	return <div className="sponsors">
		{/*<a href="#">This is footer</a>*/}

		<>
		    
	        <a href="https://in.puma.com/in/en/home&amp;utm_campaign=website&amp;utm_medium=link" target="_blank">
	            <img src="https://assets.laliga.com/assets/2020/11/25/medium/4111cc2fb8a0263cf1b94f167b5fb5da.png" alt="Puma" title="Puma" className="sponsorPuma" />
	        </a>
	        
	        <a href="https://www.ea.com/games/fifa/fifa-22">
	        	<img src="https://assets.laliga.com/assets/2021/09/22/medium/f0cd6b94116e418f24cd28cdb2d14aef.png" alt="EA Sports" title="EA Sports" className="sponsorFifa" /	>
	        </a>

	        <a href="https://www.ea.com/games/fifa/fifa-22">
	        	<img src="https://assets.laliga.com/assets/2021/05/19/medium/f0117c1b80b14df3c43542adbf905d7f.png" alt="Microsoft" title="Microsoft" className="sponsorMicrosoft" />
	        </a>
		    
        </>
	</div>
}

export default Sponsor;