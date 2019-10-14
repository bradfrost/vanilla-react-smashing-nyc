import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { OptionList } from '../OptionList/OptionList';
import { Field } from '../Field/Field';
import './RadioField.scss';

export class RadioField extends Component {
  render() {
    const fieldClass = 'c-radio-field';

    return (
      <Field
        className={fieldClass}
        id={this.props.id}
        label={this.props.label}
        hasError={this.props.hasError}
        disabled={this.props.disabled}
        required={this.props.required}
        fieldNote={this.props.fieldNote}
        title={this.props.title}
        tag={this.props.tag}
        ariaDescribedBy={this.props.ariaDescribedBy}
        ariaLabelledBy={this.props.ariaLabelledBy}
      >
        <OptionList
          listItems={this.props.listItems}
          ariaDescribedBy={this.props.ariaDescribedBy}
          ariaLabelledBy={this.props.ariaLabelledBy}
        />
      </Field>
    );
  }
}

RadioField.propTypes = {
  fieldClass: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  hasError: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  fieldNote: PropTypes.string,
  title: PropTypes.string,
  listItems: PropTypes.array,
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string
};

RadioField.defaultProps = {
  tag: 'h4',
  ariaDescribedBy: 'radio-field-1',
  ariaLabelledBy: 'radio-field-1-label',
  listItems: [
    {
      id: 'radio-1',
      name: 'radioexample',
      text: 'Radio 1',
      type: 'radio'
    },
    {
      id: 'radio-2',
      name: 'radioexample',
      text: 'Radio 2',
      type: 'radio'
    },
    {
      id: 'radio-3',
      name: 'radioexample',
      text: 'Radio 3',
      type: 'radio'
    }
  ]
};
