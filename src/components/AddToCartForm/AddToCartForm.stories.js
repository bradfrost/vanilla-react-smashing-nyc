import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';


import AddToCartForm from './AddToCartForm';

let module;
let stories = storiesOf('Molecules/Category/AddToCartForm', module);

stories.addDecorator(jsxDecorator);

stories.add('Default', () => (
  <AddToCartForm>
    Hello world
  </AddToCartForm>
));