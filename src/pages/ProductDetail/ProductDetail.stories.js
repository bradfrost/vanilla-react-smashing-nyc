import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProductDetail } from './ProductDetail';

let stories = storiesOf('Pages/ProductDetail', module);

stories.add('Template', () => (
  <ProductDetail />
));
