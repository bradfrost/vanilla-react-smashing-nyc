import React from 'react';
import { storiesOf } from '@storybook/react';

import { FooterNav } from './FooterNav';

let stories = storiesOf('Molecules/Navigation/FooterNav', module);

stories.add('Default', () => (
  <div style={{ backgroundColor: '#333333' }}>
    <FooterNav />
  </div>
));
