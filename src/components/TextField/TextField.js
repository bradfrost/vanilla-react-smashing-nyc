import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from '../Field/Field';
import { TextInput } from '../TextInput/TextInput';
import './TextField.scss';

export class TextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      valid: true,
      fieldNote: this.props.fieldNote,
      clicked: true
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  validateEmail(inputValue) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(inputValue);
  }

  /**
   * Validates input field on blur
   */
  handleOnBlur(e) {
    this.setState(state => ({
      inputInvalid: !state.inputInvalid
    }));
  }

  /**
   * Validates email field on change
   */
  handleEmailChange(e) {
    const inputValue = e.target.value;
    const emailValid = this.validateEmail(inputValue);

    this.setState({
      inputValue: e.target.value,
      valid: emailValid
    });
  }

  render() {
    let fieldClass = 'c-text-field';
    const { valid, fieldNote, inputValue } = this.state;

    // If type of input is email and email not valid
    if (this.props.type == 'email' && !valid) {
      fieldClass += ' has-error';
      this.state.fieldNote = this.props.title;
    }

    // Return to original
    else {
      this.state.fieldNote = this.props.fieldNote;
    }

    // If input isn't valid, the field is required, and the inputValue is empty
    if (
      this.state.inputInvalid &&
      this.props.required &&
      this.state.inputValue == ''
    ) {
      fieldClass += ' has-error';
      this.state.fieldNote =
        'This is a required field. Please fill in the proper information';
    }

    return (
      <Field
        className={fieldClass}
        id={this.props.id}
        ariaDescribedBy={this.props.ariaDescribedBy}
        ariaLabelledBy={this.props.ariaLabelledBy}
        label={this.props.label}
        hasError={this.props.hasError}
        disabled={this.props.disabled}
        required={this.props.required}
        fieldNote={this.state.fieldNote}
        title={this.props.title}
      >
        <TextInput
          type={this.props.type}
          id={this.props.id}
          name={this.props.name}
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          readOnly={this.props.readOnly}
          required={this.props.required}
          ariaDescribedBy={this.props.ariaDescribedBy}
          ariaLabelledBy={this.props.ariaLabelledBy}
          action={this.handleEmailChange}
          blurAction={this.handleOnBlur}
        />
      </Field>
    );
  }
}

TextField.propTypes = {
  fieldClass: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  hasError: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  fieldNote: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'password',
    'datetime',
    'datetime-local',
    'date',
    'month',
    'time',
    'week',
    'number',
    'email',
    'url',
    'search',
    'tel'
  ]),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  handleEmailChange: PropTypes.func,
  handleOnBlur: PropTypes.func
};

TextField.defaultProps = {
  id: 'text-field-1',
  label: 'Label',
  fieldNote: 'This is a fieldnote.',
  ariaDescribedBy: 'text-field-1',
  ariaLabelledBy: 'text-field-1-label'
};
