import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";
import data from "../yourdata";

class Banner extends Component {
	constructor() {
		super();
		this.state = { isToggleOn: false, isTop: true };

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((state) => ({
			isToggleOn: !state.isToggleOn,
		}));
	}

	componentDidMount() {
		document.addEventListener("scroll", () => {
			const isTop = window.scrollY < 100;
			if (isTop !== this.state.isTop) {
				this.setState({ isTop });
			}
		});
	}

	render() {
		return (
			<div className="banner-wrap">
				<RubberBand>
					<div className="banner-bg"></div>
				</RubberBand>
				<div id="scroll-wrapper">
					<div id="scroll-title">Scroll</div>
					<div id="scroll-down"></div>
				</div>
				<div className="banner-container">
					<Fade bottom>
						<div className="header-title-wrap">
							<p className="header-title">
								You found me! I am{" "}
								<span className="name">Joshua&nbsp;Gomora</span>.
								<br />
								Web&nbsp;Designer. Full-stack Developer.
								<br />
							</p>
							<div className="banner-btn-wrap">
								<a
									className="site-button"
									href={`mailto:${data.contactEmail}`}
									rel="noopener noreferrer"
								>
									Contact
								</a>
							</div>
						</div>
					</Fade>
				</div>
			</div>
		);
	}
}

export default Banner;
