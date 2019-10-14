import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./PageHeader.scss";

export class PageHeader extends Component {
	render() {
		const pageHeaderClass = classnames(
			"c-page-header",
			this.props.className,
			{
				"c-page-header--small": this.props.isSmall
			}
		);

		return (
			<header className={pageHeaderClass}>
				<h1 className="c-page-header__title">{this.props.title}</h1>

				{this.props.description && (
					<div className="c-page-header__description c-text-passage">
						{this.props.description}
					</div>
				)}
			</header>
		);
	}
}

PageHeader.propTypes = {
	pageHeaderClass: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string
};

PageHeader.defaultProps = {
	title: "This is the page title",
	description: "This is a description"
};
