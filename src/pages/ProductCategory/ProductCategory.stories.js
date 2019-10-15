import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProductCategory } from './ProductCategory';

let stories = storiesOf('Pages/ProductCategory', module);

stories.add('Template', () => (
  <ProductCategory />
));
