import React, { Component } from "react";
import PropTypes from "prop-types";
import "./FooterNav.scss";

export class FooterNav extends Component {
	render() {
		return (
			<nav className="c-footer-nav">
				<ul className="c-footer-nav__list">
					{this.props.listItems.map(function(listItem, index) {
						return (
							<li
								className="c-footer-nav__item"
								key={`c-footer-nav-item-${index}`}
							>
								<a
									className="c-footer-nav__link"
									href={listItem.href}
								>
									{listItem.text}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		);
	}
}

FooterNav.propTypes = {
	listItems: PropTypes.array,
	href: PropTypes.string,
	text: PropTypes.string
};

FooterNav.defaultProps = {
	listItems: [
		{
			href: "#",
			text: "Footer Nav Item 1"
		},
		{
			href: "#",
			text: "Footer Nav Item 2"
		},
		{
			href: "#",
			text: "Footer Nav Item 3"
		},
		{
			href: "#",
			text: "Footer Nav Item 4"
		}
	]
};
