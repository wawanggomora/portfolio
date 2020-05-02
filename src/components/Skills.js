import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.showSkillBar();
	}

	showSkillBar() {
		let barGroup = document.getElementsByClassName("bar-group");
		for (var i = 0; i < barGroup.length; i++) {
			let percent = barGroup[i].getAttribute("data-percent"),
				scale = percent / 100;
			let percentage = barGroup[i].childNodes[0].children[0],
				barPercentage = barGroup[i].childNodes[1].children[0];
			percentage.innerHTML = percent + "%";
			barPercentage.setAttribute("style", "transform: scaleX(" + scale + ")");
		}
	}

	render() {
		return (
			<div className="skills-wrap">
				<div className="skills-bg"></div>

				<Fade bottom>
					<div className="skills-container">
						<div className="skills-content">
							<h1>
								<Fade bottom cascade>
									Skills.
								</Fade>
							</h1>

							<div className="skill-bars">
								<div className="bar-chart">
									<div className="bar-group" data-percent="100">
										<div className="bar-name">
											HTML / CSS
											<div className="percentage">0%</div>
										</div>
										<div className="bar-holder">
											<div className="bar-percentage"></div>
										</div>
									</div>
									<div className="bar-group" data-percent="95">
										<div className="bar-name">
											Wordpress
											<div className="percentage">0%</div>
										</div>
										<div className="bar-holder">
											<div className="bar-percentage"></div>
										</div>
									</div>
									<div className="bar-group" data-percent="68">
										<div className="bar-name">
											React.js
											<div className="percentage">0%</div>
										</div>
										<div className="bar-holder">
											<div className="bar-percentage"></div>
										</div>
									</div>
									<div className="bar-group" data-percent="93">
										<div className="bar-name">
											Adobe Photoshop
											<div className="percentage">0%</div>
										</div>
										<div className="bar-holder">
											<div className="bar-percentage"></div>
										</div>
									</div>
								</div>

								<div className="bar-chart">
									<div className="bar-group" data-percent="90">
										<div className="bar-name">
											PHP
											<div className="percentage">0%</div>
										</div>
										<div className="bar-holder">
											<div className="bar-percentage"></div>
										</div>
									</div>
									<div className="bar-group" data-percent="87">
										<div className="bar-name">
											Javascript
											<div className="percentage">0%</div>
										</div>
										<div className="bar-holder">
											<div className="bar-percentage"></div>
										</div>
									</div>
									<div className="bar-group" data-percent="75">
										<div className="bar-name">
											Vue.js
											<div className="percentage">0%</div>
										</div>
										<div className="bar-holder">
											<div className="bar-percentage"></div>
										</div>
									</div>
									<div className="bar-group" data-percent="83">
										<div className="bar-name">
											SEO
											<div className="percentage">0%</div>
										</div>
										<div className="bar-holder">
											<div className="bar-percentage"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Fade>
			</div>
		);
	}
}

export default Skills;
