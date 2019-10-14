import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Icon } from '../Icon/Icon';
import './Button.scss';

export class Button extends Component {
  render() {
    const btnClass = classnames('c-btn', this.props.className, {
      'c-btn--secondary': this.props.issecondary
    });

    return (
      <button
        className={btnClass}
        disabled={this.props.disabled}
        {...this.props}
      >
        {this.props.iconname && (
          <Icon
            iconname={this.props.iconname}
            iconclass={this.props.iconclass}
          />
        )}
        {this.props.text && (
          <span className='c-btn__text'>{this.props.text}</span>
        )}
        {this.props.iconnameafter && (
          <Icon
            iconname={this.props.iconnameafter}
            iconclass={this.props.iconclass}
          />
        )}
      </button>
    );
  }
}

Button.propTypes = {
  btnClass: PropTypes.string,
  issecondary: PropTypes.bool,
  disabled: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  iconclass: PropTypes.string,
  iconname: PropTypes.string,
  iconnameafter: PropTypes.string
};

Button.defaultProps = {
  disabled: false,
  text: 'Button',
  iconclass: 'c-btn__icon'
};
