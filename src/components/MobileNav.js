import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import HamburgerMenu from "react-hamburger-menu";
class MobileNav extends Component {
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
			<div className="mobile-nav">
				<HamburgerMenu
					isOpen={this.state.isToggleOn}
					menuClicked={this.handleClick}
					width={18}
					height={15}
					strokeWidth={1}
					rotate={0}
					color="black"
					borderRadius={0}
					animationDuration={0.5}
				/>
				<div
					className={`floating-nav ${
						this.state.isToggleOn ? "is-toggleOn" : ""
					}`}
				>
					<ul>
						<li>
							<Link
								className="link"
								activeClass="active"
								to="home"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								onClick={this.scrollToTop}
							>
								Home.
							</Link>
						</li>
						<li>
							<Link
								className="link"
								activeClass="active"
								to="About"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								About.
							</Link>
						</li>
						<li>
							<Link
								className="link"
								activeClass="active"
								to="work"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Work.
							</Link>
						</li>
						<li>
							<Link
								className="link"
								activeClass="active"
								to="contact"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Contact.
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default MobileNav;
