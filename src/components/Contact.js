import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

class Contact extends Component {
	state = {};
	render() {
		return (
			<div className="contact-section">
				<div className="element-dot-fade"></div>
				<div className="element-3 bounce-1"></div>
				<div className="element-4 bounce-3"></div>
				<div className="contact-container">
					<h1>
						<Fade bottom cascade>
							Contact.
						</Fade>
					</h1>
					<Fade bottom>
						<div className="contact-content">
							<p className="contact-text">
								Let’s create your next <br className="hidden-m"></br>
								<span className="amazing-color">experience together</span>
							</p>
							<a href={`mailto:${data.contactEmail}`} className="email">
								{data.contactEmail}
							</a>
							<ul>
								{data.social.map((link, index) => (
									<li key={index}>
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={link.url}
										>
											{link.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					</Fade>
				</div>
			</div>
		);
	}
}

export default Contact;
