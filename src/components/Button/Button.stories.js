import React, { PropTypes } from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from './Button';

let stories = storiesOf('Molecules/Buttons/Button', module);

stories.add('Default', () => (
  <Button onClick={() => console.log('clicked!!')} />
));

stories.add('Secondary', () => <Button issecondary text='Secondary Button' />);

stories.add('Icon Before', () => (
  <Button iconname='plus' text={'Icon Before'} />
));

stories.add('Icon After', () => (
  <Button iconnameafter='minus' text='Icon After' />
));

stories.add('Icon Only', () => <Button iconname='minus' text={false} />);
