import React from 'react';
import { storiesOf } from '@storybook/react';

import { Checkout } from './Checkout';

let stories = storiesOf('Pages/Checkout', module);

stories.add('Template', () => <Checkout />);
