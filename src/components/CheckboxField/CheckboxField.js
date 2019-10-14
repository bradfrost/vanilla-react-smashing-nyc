import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from '../Field/Field';
import { OptionList } from '../OptionList/OptionList';
import './CheckboxField.scss';

export class CheckboxField extends Component {
  render() {
    const fieldClass = 'c-checkbox-field';

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
        ariaDescribedBy={this.props.ariaDescribedBy}
        ariaLabelledBy={this.props.ariaLabelledBy}
        tag={this.props.tag}
      >
        <OptionList
          listItems={this.props.listItems}
          inputChange={this.handleInputChange}
          ariaDescribedBy={this.props.ariaDescribedBy}
          ariaLabelledBy={this.props.ariaLabelledBy}
        />
      </Field>
    );
  }
}

CheckboxField.propTypes = {
  listItems: PropTypes.array,
  fieldClass: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  hasError: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  fieldNote: PropTypes.string,
  title: PropTypes.string,
  inputChange: PropTypes.func,
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string
};

CheckboxField.defaultProps = {
  tag: 'h4',
  ariaDescribedBy: 'checkbox-field-1',
  ariaLabelledBy: 'checkbox-field-1-label',
  listItems: [
    {
      id: 'checkbox-1',
      name: 'checkbox-example',
      text: 'Checkbox 1',
      type: 'checkbox'
    },
    {
      id: 'checkbox-2',
      name: 'checkbox-example',
      text: 'Checkbox 2',
      type: 'checkbox'
    },
    {
      id: 'checkbox-3',
      name: 'checkbox-example',
      text: 'Checkbox 3',
      type: 'checkbox'
    }
  ]
};
