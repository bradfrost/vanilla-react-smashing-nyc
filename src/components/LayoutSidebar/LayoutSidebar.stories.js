import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';


import LayoutSidebar from './LayoutSidebar';

let module;
let stories = storiesOf('Molecules/Category/LayoutSidebar', module);

stories.addDecorator(jsxDecorator);

stories.add('Default', () => (
  <LayoutSidebar>
    Hello world
  </LayoutSidebar>
));