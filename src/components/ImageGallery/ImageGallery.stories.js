import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import ImageGallery from './ImageGallery';

let module;
let stories = storiesOf('Molecules/Category/ImageGallery', module);

stories.addDecorator(jsxDecorator);

stories.add('Default', () => <ImageGallery></ImageGallery>);
