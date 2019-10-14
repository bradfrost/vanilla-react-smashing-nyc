import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Label extends Component {
  render() {
    const Label = this.props.tag;
    return (
      <Label
        className={`c-field__label ${this.props.className}`}
        htmlFor={this.props.htmlFor}
        id={this.props.id}
      >
        {this.props.labelText}
        {this.props.required && (
          <abbr className='c-field__required' title='required'>
            *
          </abbr>
        )}
      </Label>
    );
  }
}

Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  labelText: PropTypes.string,
  required: PropTypes.bool,
  id: PropTypes.string
};

Label.defaultProps = {
  labelText: 'Label',
  tag: 'label'
};
