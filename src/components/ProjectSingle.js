import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import { Link } from "react-router-dom";

class ProjectSingle extends Component {
	constructor() {
		super();

		this.state = {
			index: null,
			projectExists: false,
			project: {},
		};
	}

	componentWillMount() {
		const { slug } = this.props.match.params;

		data.projects.forEach((project, index) => {
			if (slug === project.slug) {
				this.setState({
					index: index,
					projectExists: true,
					project: data.projects[index],
				});
			}
		});
	}

	render() {
		return (
			<div>
				{!this.state.projectExists ? (
					this.props.history.push("/page-not-found")
				) : (
					<div className="project-view">
						<div className="project-view-container">
							<div className="project-view-col project-view-left">
								{this.state.project.previewOne ? (
									<img src={this.state.project.previewOne} alt="Mobile view" />
								) : (
									""
								)}

								{this.state.project.previewTwo ? (
									<img src={this.state.project.previewTwo} alt="Desktop view" />
								) : (
									""
								)}
							</div>
							<div className="project-view-col project-view-right">
								<div id="scroll-wrapper">
									<div id="scroll-title">Scroll</div>
									<div id="scroll-down"></div>
								</div>
								<Link className="back-btn" to="/">
									&larr; <span>Back to Home</span>
								</Link>
								<Fade bottom>
									<div className="project-right-container">
										<div>
											<h1 className="project-name">
												{this.state.project.title}
											</h1>
										</div>
										<h2>CLIENT</h2>
										<p>{this.state.project.client}</p>
										<h2>CATEGORY</h2>
										<p>{this.state.project.category}</p>

										{this.state.project.url ? (
											<div className="view-project-wrap">
												<a
													href={this.state.project.url}
													className="view-project-link style4-button"
													target="_blank"
													without
													rel="noopener noreferrer"
												>
													<span>View Project</span>
												</a>
											</div>
										) : (
											""
										)}
									</div>
								</Fade>
							</div>
						</div>
					</div>
				)}

				{console.log(this.state.project)}
			</div>
		);
	}
}

export default ProjectSingle;
