import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';


import ProductDescription from './ProductDescription';

let module;
let stories = storiesOf('Molecules/Category/ProductDescription', module);

stories.addDecorator(jsxDecorator);

stories.add('Default', () => (
  <ProductDescription>
    Hello world
  </ProductDescription>
));