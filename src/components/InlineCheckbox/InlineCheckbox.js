import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InlineCheckbox.scss';

export class InlineCheckbox extends Component {
  render() {
    return (
      <label className='c-input-group' htmlFor={this.props.id}>
        <input
          id={this.props.id}
          type='checkbox'
          name={this.props.name}
          value={this.props.value}
          className='c-input-group__control'
          checked={this.props.checked}
        />
        <span className='c-input-group__text'>{this.props.label}</span>
      </label>
    );
  }
}

InlineCheckbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string
};

InlineCheckbox.defaultProps = {
  id: 'inline-checkbox-1',
  name: 'inlinecheckbox',
  value: 'Value',
  label: 'Inline checkbox label'
};
