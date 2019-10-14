import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from '../Select/Select';
import { Field } from '../Field/Field';

export class SelectField extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(event.target.value);
  }

  render() {
    return (
      <Field
        className='c-select-field'
        id={this.props.id}
        label={this.props.label}
        hasError={this.props.hasError}
        disabled={this.props.disabled}
        required={this.props.required}
        fieldNote={this.props.fieldNote}
        title={this.props.title}
        ariaDescribedBy={this.props.ariaDescribedBy}
        ariaLabelledBy={this.props.ariaLabelledBy}
      >
        <Select
          value={this.state.value}
          changeAction={this.handleChange}
          disabled={this.props.disabled}
          ariaDescribedBy={this.props.ariaDescribedBy}
          ariaLabelledBy={this.props.ariaLabelledBy}
        />
      </Field>
    );
  }
}

SelectField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  hasError: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  handleChange: PropTypes.func,
  title: PropTypes.string,
  fieldNote: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string
};

SelectField.defaultProps = {
  ariaDescribedBy: 'select-field-1',
  ariaLabelledBy: 'select-field-1-label',
  id: 'select-field-1',
  label: 'Label',
  fieldNote: 'This is a fieldnote'
};
