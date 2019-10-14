import React from 'react';
import { storiesOf } from '@storybook/react';

import { Card } from './Card';

let stories = storiesOf('Molecules/Blocks/Card', module);

stories.add('Default', () => <Card>This is the card body.</Card>);

stories.add('Dark', () => (
  <Card
    theme='dark'
    title='Dark Card Title'
    description='This is the card description'
  >
    This is the card body.
  </Card>
));
