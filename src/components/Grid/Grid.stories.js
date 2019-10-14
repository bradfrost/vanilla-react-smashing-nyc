import React from 'react';
import { storiesOf } from '@storybook/react';

import Grid from './Grid';
import GridItem from '../GridItem';

import '../../css/scss/utilities/_spacing.scss';

let module;
let stories = storiesOf('Molecules/Layout and Containers/Grid', module);

stories.add('Default', () => (
  <Grid>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
));

stories.add('Side by side', () => (
  <Grid variant='side-by-side'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
));

stories.add('2up grid', () => (
  <Grid variant='2up'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
));

stories.add('1 to 3up grid', () => (
  <Grid variant='1-to-3up'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
));

stories.add('3up grid', () => (
  <Grid variant='3up'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
));

stories.add('4up grid', () => (
  <Grid variant='4up'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
));

stories.add('Grid spacing none', () => (
  <Grid variant='2up' gap='none'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
));

stories.add('Grid spacing small ', () => (
  <Grid variant='2up' gap='small'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
));

stories.add('Grid spacing large', () => (
  <Grid variant='2up' gap='large'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
));

stories.add('Grid spacing xl', () => (
  <Grid variant='2up' gap='xl'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
));

stories.add('Grid row spacing none', () => (
  <Grid variant='2up' rowGap='none'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
));

stories.add('Grid row spacing small ', () => (
  <Grid variant='2up' rowGap='small'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
));

stories.add('Grid row spacing large', () => (
  <Grid variant='2up' rowGap='large'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
));

stories.add('Grid row spacing xl', () => (
  <Grid variant='2up' rowGap='xl'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
));

stories.add('Grid column spacing none', () => (
  <Grid variant='2up' colGap='none'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
));

stories.add('Grid column spacing small ', () => (
  <Grid variant='2up' colGap='small'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
));

stories.add('Grid column spacing large', () => (
  <Grid variant='2up' colGap='large'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
));

stories.add('Grid column spacing xl', () => (
  <Grid variant='2up' colGap='xl'>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
    <GridItem>
      <div className='fpo u-margin-none'>Grid Item</div>
    </GridItem>
  </Grid>
));
