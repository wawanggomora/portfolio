import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import ProjectSingle from "./components/ProjectSingle";
import Homepage from "./pages/homepage";
import PageNotFound from "./pages/page-not-found";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/projects/:slug" component={ProjectSingle} />
				<Route path="/page-not-found" component={PageNotFound} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
	);
}

/*
			<div className="contact">
				<Contact></Contact>
			</div>

*/

export default App;
