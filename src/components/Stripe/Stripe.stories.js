import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';


import Stripe from './Stripe';

let module;
let stories = storiesOf('Molecules/Category/Stripe', module);

stories.addDecorator(jsxDecorator);

stories.add('Default', () => (
  <Stripe>
    Hello world
  </Stripe>
));