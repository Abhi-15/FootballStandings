import React from "react";
import Sponsor from '../../organisms/Sponsor';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';

function AppSkeleton(props){

	return <>
		<Header />
		{props.children}
		<Sponsor />
		<Footer />
	</>;
}

export default AppSkeleton;

