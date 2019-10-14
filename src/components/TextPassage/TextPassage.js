import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TextPassage.scss";

export class TextPassage extends Component {
	render() {
		return <div className="c-text-passage">{this.props.children}</div>;
	}
}

TextPassage.propTypes = {
	children: PropTypes.node
};
