import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './TextPassage.scss';

export class TextPassage extends Component {
  render() {
    const textPassageClass = classnames(
      'c-text-passage',
      this.props.className,
      {}
    );

    return <div className={textPassageClass}>{this.props.children}</div>;
  }
}

TextPassage.propTypes = {
  children: PropTypes.node
};
