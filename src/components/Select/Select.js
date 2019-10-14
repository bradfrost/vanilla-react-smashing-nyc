import React, { Component } from "react";
import PropTypes from "prop-types";

export class Select extends Component {
	render() {
		return (
			<select
				className="c-field__control"
				id={this.props.id}
				multiple={this.props.multiple}
				disabled={this.props.disabled}
				value={this.props.value}
				onChange={this.props.changeAction}
				aria-describedby={this.props.ariaDescribedBy}
				aria-labelledby={this.props.ariaLabelledBy}
			>
				{this.props.listItems.map(function(listItem, index) {
					return listItem.optGroupLabel ? (
						<optgroup
							key={`option-${index}`}
							label={listItem.optGroupLabel}
						>
							{listItem.optGroupItems.map(function(
								optGroupItem,
								index
							) {
								return (
									<option
										key={`option-group-${index}`}
										value={optGroupItem.value}
									>
										{optGroupItem.option}
									</option>
								);
							})}
						</optgroup>
					) : (
						<option key={`option-${index}`} value={listItem.value}>
							{listItem.option}
						</option>
					);
				})}
			</select>
		);
	}
}

Select.propTypes = {
	id: PropTypes.string,
	multiple: PropTypes.bool,
	disabled: PropTypes.bool,
	value: PropTypes.string,
	onChange: PropTypes.func,
	listItems: PropTypes.array,
	optGroupLabel: PropTypes.string,
	option: PropTypes.string,
	ariaDescribedBy: PropTypes.string,
	ariaLabelledBy: PropTypes.string
};

Select.defaultProps = {
	listItems: [
		{
			value: "value-1",
			option: "Value 1"
		},
		{
			value: "value-2",
			option: "Value 2"
		}
	]
};
