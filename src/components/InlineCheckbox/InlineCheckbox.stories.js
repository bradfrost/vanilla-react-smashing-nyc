import React from 'react';
import { storiesOf } from '@storybook/react';
import { InlineCheckbox } from './InlineCheckbox';

let stories = storiesOf('Molecules/Forms/InlineCheckbox', module);

stories.add('Default', () => <InlineCheckbox />);
