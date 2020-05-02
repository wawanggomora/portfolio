import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header = () => (
	<header>
		<div className="nav-container">
			<h1 className="logo">
				<Fade bottom cascade>
					{data.name}
				</Fade>
			</h1>
			<Navbar></Navbar>
			<MobileNav></MobileNav>
		</div>
	</header>
);

export default Header;
