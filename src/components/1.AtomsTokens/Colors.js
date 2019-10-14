import React, { Component } from "react";
import "../../css/styleguide.css";
import PropTypes from "prop-types";
import brandColors from "../../data/brand-colors.json";

export class Colors extends Component {
	render() {
		return (
			<ul className="sg-colors">
				{this.props.listItems.map(function(listItem, index) {
					return (
						<li key={`color-${index}`}>
							<span
								className="sg-swatch"
								style={{ backgroundColor: listItem.value }}
							/>
							<span className="sg-label">
								{listItem.name}
								<br /> {listItem.value}
								<br /> {listItem.comment}
							</span>
						</li>
					);
				})}
			</ul>
		);
	}
}

Colors.propTypes = {
	listItems: PropTypes.array,
	value: PropTypes.string,
	name: PropTypes.string,
	comment: PropTypes.string
};

Colors.defaultProps = {
	listItems: brandColors.items
};
