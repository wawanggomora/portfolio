import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import Josh from "../assets/josh-gomora.jpg";

class About extends Component {
	constructor(props) {
		super(props);
		this.state = { imageStatus: false };
	}

	handleChange = (e) => {
		var r = document.querySelector(".about-wrap"),
			s = document.querySelector(".user-photo"),
			a = document.querySelector(".user-photo-bg"),
			l = window.innerHeight,
			c = window.innerWidth;
		r.addEventListener("mousemove", function (e) {
			var t = (((e.clientX / c) * 100).toFixed(0) - 50) / 4,
				n = (((e.clientY / l) * 100).toFixed(0) - 50) / 4,
				r = "translate3d(" + -t + "px, " + -n + "px, 0)",
				u = "translate3d(" + t + "px, " + n + "px, 0) translate(-15%,-10%)";
			s.style.transform = r;
			a.style.transform = u;
		});
	};

	handleImageLoaded() {
		this.setState({ imageStatus: true });
	}

	handleImageErrored() {
		this.setState({ imageStatus: "failed to load" });
	}

	render() {
		return (
			<div className="about-wrap">
				<div className="element-1 bounce-2"></div>
				<div className="about-container">
					<div className="about-content">
						<h1>
							<Fade bottom cascade>
								About.
							</Fade>
						</h1>
						<Fade bottom>
							<p>
								I am a web developer at{" "}
								<strong>
									<a className="site-link" href="https://www.thisisbloop.com/">
										bloop℠
									</a>
								</strong>
								. I specialize in creating modern web solutions for individuals
								and businesses. Using the latest technologies and coding
								standards, I will strive to build you a great web solution. With
								over 4 years of experience in web design and development for{" "}
								<span>E-commerce</span> websites and{" "}
								<span>landing&nbsp;pages</span>.
							</p>
						</Fade>
						<a
							className="site-button"
							href="https://drive.google.com/open?id=1uHh5BsTUnoLpJ-poSKiTXqXuacB3pupZ"
							target="_blank"
							rel="noopener noreferrer"
						>
							Download Resumé
						</a>
					</div>
					<div className="about-photo-wrap">
						{data.ShowAboutImage ? (
							<div className="about-photo" onMouseOver={this.handleChange}>
								<img
									className="user-photo"
									src={Josh}
									onLoad={this.handleImageLoaded.bind(this)}
									alt="Joshua Gomora"
								/>
								<div className="user-photo-bg"></div>
							</div>
						) : null}
						{this.state.imageStatus ? null : (
							<div className="img-placeholder"></div>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default About;
