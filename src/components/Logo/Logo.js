import React, { Component } from "react";
import PropTypes from "prop-types";
import logoImg from "../../images/fpo-120x60.png";
import globals from "../../data/globals.json";
import "./Logo.scss";

export class Logo extends Component {
	render() {
		return (
			<a
				href={this.props.href}
				className="c-logo"
				rel="home"
				{...this.props}
			>
				<img
					className="c-logo__img"
					src={logoImg}
					alt={globals.company.name}
				/>
			</a>
		);
	}
}

Logo.propTypes = {
	href: PropTypes.string,
	logoImg: PropTypes.string,
	alt: PropTypes.string
};
