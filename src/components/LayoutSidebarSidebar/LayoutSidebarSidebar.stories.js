import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';


import LayoutSidebarSidebar from './LayoutSidebarSidebar';

let module;
let stories = storiesOf('Molecules/Category/LayoutSidebarSidebar', module);

stories.addDecorator(jsxDecorator);

stories.add('Default', () => (
  <LayoutSidebarSidebar>
    Hello world
  </LayoutSidebarSidebar>
));