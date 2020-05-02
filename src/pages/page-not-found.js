import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const PageNotFound = () => (
	<Fade bottom>
		<div className="page-not-found">
			<div className="pnf-container">
				<h1 className="pnf-title">Error 404</h1>
				<p className="pnf-subtitle">
					The page you are trying to reach could not be found.
				</p>
				<Link className="site-button" to="/">
					Back to Home
				</Link>
			</div>
		</div>
	</Fade>
);

export default PageNotFound;
