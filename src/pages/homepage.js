import React from "react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/work";
import Contact from "../components/Contact";

const Homepage = () => (
	<div className="homepage">
		<Header></Header>
		<div className="App-banner">
			<Banner></Banner>
		</div>
		<div className="About">
			<About></About>
		</div>
		<div className="Skills">
			<Skills></Skills>
		</div>
		<div className="work">
			<Work></Work>
		</div>
		<div className="contact">
			<Contact></Contact>
		</div>
	</div>
);

export default Homepage;
