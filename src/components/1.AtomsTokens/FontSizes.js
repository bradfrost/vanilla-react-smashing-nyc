import React, { Component } from "react";
import PropTypes from "prop-types";
import fontSizes from "../../data/font-sizes.json";

export class FontSizes extends Component {
	render() {
		return (
			<ul>
				{this.props.listItems.map(function(listItem) {
					return (
						<li
							key={listItem.value}
							style={{ fontSize: listItem.value }}
						>
							{listItem.name}: {listItem.value}
						</li>
					);
				})}
			</ul>
		);
	}
}

FontSizes.propTypes = {
	listItems: PropTypes.array,
	value: PropTypes.string,
	name: PropTypes.string
};

FontSizes.defaultProps = {
	listItems: fontSizes.items
};
