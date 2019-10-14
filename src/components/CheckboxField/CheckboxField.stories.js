import React from 'react';
import { storiesOf } from '@storybook/react';
import { CheckboxField } from './CheckboxField';

let stories = storiesOf('Molecules/Forms/CheckboxField', module);

stories.add('Default', () => <CheckboxField />);

stories.add('Required', () => (
  <CheckboxField
    required={true}
    listItems={[
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
    ]}
    fieldNote='This is a required field'
  />
));

stories.add('Disabled', () => (
  <CheckboxField
    fieldClass='c-field has-error'
    disabled
    listItems={[
      {
        id: 'checkbox-1',
        name: 'checkbox-example',
        text: 'Checkbox 1',
        type: 'checkbox',
        disabled: true
      },
      {
        id: 'checkbox-2',
        name: 'checkbox-example',
        text: 'Checkbox 2',
        type: 'checkbox',
        disabled: true
      },
      {
        id: 'checkbox-3',
        name: 'checkbox-example',
        text: 'Checkbox 3',
        type: 'checkbox',
        disabled: true
      }
    ]}
    fieldNote='This is a disabled field'
  />
));

stories.add('Error', () => (
  <CheckboxField
    fieldClass='c-field has-error'
    hasError
    listItems={[
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
    ]}
    fieldNote='This is a field with an error.'
  />
));
