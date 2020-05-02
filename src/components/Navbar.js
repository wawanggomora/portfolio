import React, { Component } from "react";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

class Navbar extends Component {
	constructor() {
		super();
		this.state = { isToggleOn: false };

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((state) => ({
			isToggleOn: !state.isToggleOn,
		}));
	}

	scrollToTop = () => {
		scroll.scrollToTop();
	};

	render() {
		return (
			<div className="site-navigation">
				<nav>
					<ul>
						<li>
							<LinkScroll
								className="link"
								activeClass="active"
								to="home"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								onClick={this.scrollToTop}
							>
								Home
							</LinkScroll>
						</li>
						<li>
							<LinkScroll
								className="link"
								activeClass="active"
								to="About"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								About
							</LinkScroll>
						</li>
						<li>
							<LinkScroll
								className="link"
								activeClass="active"
								to="work"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Work
							</LinkScroll>
						</li>
						<li>
							<LinkScroll
								className="link"
								activeClass="active"
								to="contact"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Contact
							</LinkScroll>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Navbar;
