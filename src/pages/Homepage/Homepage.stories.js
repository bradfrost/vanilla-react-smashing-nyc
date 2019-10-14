import React from 'react';
import { storiesOf } from '@storybook/react';

import { Homepage } from './Homepage';

let stories = storiesOf('Pages/Homepage', module);

/**
 * Long Card list array
 */
const longCardList = [
  {
    styleModifier: 'c-card--dark',
    title: 'Card 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Card 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Card 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Card 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    styleModifier: 'c-card--dark',
    title: 'Card 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Card 6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Card 7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Card 8',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    styleModifier: 'c-card--dark',
    title: 'Card 9',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Card 10',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Card 11',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Card 12',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];

stories.add('Template', () => (
  <Homepage>
    <p>
      A text passage contains arbitrary text that might come from a CMS. It
      should live within a container that caps the line length of the text to
      avoid a straining reading experience.
    </p>

    <h2>Heading 2</h2>

    <p>
      This is another paragraph of text. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>

    <ul>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
    </ul>

    <h3>Heading 3</h3>

    <ol>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
      <li>Here is a unordered list item</li>
    </ol>

    <p>
      <a href='#x'>Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat.
    </p>

    <blockquote>
      <p>This is a quotation from something.</p>
      <cite>Cite source</cite>
    </blockquote>

    <p>That is all.</p>
  </Homepage>
));

stories.add('Mountains', () => (
  <Homepage
    heroImgSrc='https://images.unsplash.com/photo-1570171278960-d6c2b316f3b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
    heroImgAlt='Snow-covered jagged mountains'
    heroTitle='Look at these mountains'
    heroDescription="Wow that's pretty great"
    section1Title='Here are a bunch of mountains'
    section1Description='Some cards talking about mountains'
  />
));

stories.add('Forest w/ extra cards', () => (
  <Homepage
    heroImgSrc='https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
    heroImgAlt='Forest with sunlight poking through trees'
    heroTitle='This is a forest'
    heroDescription='This is also pretty great'
    cardListItems={longCardList}
    section1Title='Here are a bunch of forests'
    section1Description='Some cards talking about forests'
  />
));
