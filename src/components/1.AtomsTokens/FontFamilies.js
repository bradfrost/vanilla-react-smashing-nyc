import React, { Component } from "react";
import PropTypes from "prop-types";

export class FontFamilies extends Component {
	render() {
		return (
			<ul>
				{this.props.listItems.map(function(listItem) {
					return (
						<li
							key={listItem.value}
							style={{ fontFamily: listItem.value }}
						>
							{listItem.name}: {listItem.value}
						</li>
					);
				})}
			</ul>
		);
	}
}

FontFamilies.propTypes = {
	listItems: PropTypes.array,
	value: PropTypes.string,
	name: PropTypes.string
};

FontFamilies.defaultProps = {
	listItems: [
		{
			name: "$font-family-primary",
			value: '"HelveticaNeue", "Helvetica", "Arial", sans-serif'
		},
		{
			name: "$font-family-secondary",
			value: "serif"
		}
	]
};
