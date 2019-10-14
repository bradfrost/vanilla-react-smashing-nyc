# Vanilla React

Vanilla React is a barebones UI starter kit for building components and pages

## Using This Repo

To get started, type the following commands into the terminal:

- `git clone https://github.com/bradfrost/vanilla-react.git && cd vanilla-react`
- `npm install`
- `npm start` will start Storybook.

## Building components

Components live in `src/components`, and the easiest way to add a new component by running [plop](https://plopjs.com/) in the command line:

```
npm run plop
```

Choose a name for your new component in the terminal, and plop will generate the new component structure, which looks like this:

```
- ComponentName
  - ComponentName.js
  - ComponentName.scss
  - ComponentName.stories.js
  - index.js
```

For example, the `Button` component will add `Button.js`, `Button.stories.js`, `Button.scss`, and `index.js`.

**Button.js** could look something like:

```js
import React, { Component } from 'react';
import './Button.scss';

export class Button extends Component {
  render() {
    return (
      <button className='Button' {...this.props}>
        {this.props.children}
      </button>
    );
  }
}
```

**Button.stories.js** will be:

```js
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

let stories = storiesOf('Button', module);

stories.add('Default', () => (
  <Button onClick={() => console.log('clicked!!')}>Hello Button</Button>
));
```
