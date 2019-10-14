import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "../Card/Card";
import "./CardList.scss";

export class CardList extends Component {
	render() {
		return (
			<ul className="c-card-list">
				{this.props.cardListItems.map(function(listItem, index) {
					return (
						<Card
							key={`c-card-${index}`}
							theme={listItem.theme}
							title={listItem.title}
							description={listItem.description}
						/>
					);
				})}
			</ul>
		);
	}
}

CardList.propTypes = {
	listItems: PropTypes.array,
	theme: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string
};

CardList.defaultProps = {
	cardListItems: [
		{
			title: "Card Title",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		},
		{
			title: "Card Title",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		},
		{
			title: "Card Title",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		},
		{
			title: "Card Title",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		}
	]
};
