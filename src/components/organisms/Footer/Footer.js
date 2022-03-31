import React from "react";
import TypoGraphy from '../../atoms/TypoGraphy';
import styles from './footer.css';

function Footer(){

	return <div className="footer">
		<TypoGraphy
			text='&copy; copyright 2022'
		/>
	</div>
}

export default Footer;