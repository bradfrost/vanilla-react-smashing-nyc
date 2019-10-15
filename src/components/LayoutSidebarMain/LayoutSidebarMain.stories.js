import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';


import LayoutSidebarMain from './LayoutSidebarMain';

let module;
let stories = storiesOf('Molecules/Category/LayoutSidebarMain', module);

stories.addDecorator(jsxDecorator);

stories.add('Default', () => (
  <LayoutSidebarMain>
    Hello world
  </LayoutSidebarMain>
));