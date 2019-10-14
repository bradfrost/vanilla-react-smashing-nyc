import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import LayoutContainer from './LayoutContainer';

let module;
let stories = storiesOf(
  'Molecules/Layout and Containers/Layout Container',
  module
);

stories.addDecorator(jsxDecorator);

stories.add('Default', () => (
  <LayoutContainer>
    <p>
            A Layout Container caps the width of the content to the maximum
            width and centers the container
    </p>
  </LayoutContainer>
));

stories.add('Narrow', () => (
  <LayoutContainer variant='narrow'>
    <p>
            A Layout Container caps the width of the content to the maximum
            width and centers the container
    </p>
  </LayoutContainer>
));

stories.add('Very narrow', () => (
  <LayoutContainer variant='very-narrow'>
    <p>
            A Layout Container caps the width of the content to the maximum
            width and centers the container
    </p>
  </LayoutContainer>
));

stories.add('Centered', () => (
  <LayoutContainer align='center'>
    <p>
            A Layout Container caps the width of the content to the maximum
            width and centers the container
    </p>
  </LayoutContainer>
));
