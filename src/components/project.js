import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Project extends Component {
	state = {};
	render() {
		return (
			<Fade bottom>
				<div className="project">
					<div className="project-image">
						<img src={this.props.imageSrc} alt={this.props.title}></img>
					</div>
					<div class="work-bg"></div>
					<p className="project-title">{this.props.title}</p>
					<span>{this.props.service}</span>
				</div>
			</Fade>
		);
	}
}

//<Link className="project-link" to={this.props.slug}>
//</Link>
export default Project;
