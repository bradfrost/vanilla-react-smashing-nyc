import React from 'react';
import { storiesOf } from '@storybook/react';
import { Field } from './Field';

let stories = storiesOf('Molecules/Forms/Field', module);

stories.add('Default', () => (
  <Field>
    <div className='fpo'>Field</div>
  </Field>
));
