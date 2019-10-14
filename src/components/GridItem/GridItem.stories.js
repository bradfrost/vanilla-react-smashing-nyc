import React from 'react';
import { storiesOf } from '@storybook/react';

import GridItem from './GridItem';

let module;
let stories = storiesOf('Molecules/Layout and Containers/GridItem', module);

stories.add('Default', () => (
  <GridItem>
    <div className='fpo'>Grid item</div>
  </GridItem>
));
