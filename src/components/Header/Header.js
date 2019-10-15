import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Logo } from '../Logo/Logo';
import { PrimaryNav } from '../PrimaryNav/PrimaryNav';
import { InlineForm } from '../InlineForm/InlineForm';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import './Header.scss';

export class Header extends Component {
  render() {
    const componentClassName = classnames('c-header', this.props.className, {});

    return (
      <header className={componentClassName}>
        <LayoutContainer className='c-header__inner'>
          <Logo href='/' />

          <PrimaryNav navitems={this.props.navitems} />

          <InlineForm
            method='post'
            action='#'
            placeholder='Search the site'
            cta='Search'
            id='search-form'
            label='Search the site'
          />
        </LayoutContainer>
      </header>
    );
  }
}

Header.propTypes = {
  children: PropTypes.node,
  navitems: PropTypes.array
};
