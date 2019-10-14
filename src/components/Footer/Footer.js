import React, { Component } from 'react';
import { FooterNav } from '../FooterNav/FooterNav';
import { InlineForm } from '../InlineForm/InlineForm';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import globals from '../../data/globals.json';
import './Footer.scss';

export class Footer extends Component {
  render() {
    return (
      <footer role='contentinfo' className='c-footer' {...this.props}>
        <LayoutContainer>
          <InlineForm
            method='post'
            action='#'
            placeholder='name@email.com'
            cta='Join our newsletter'
            id='search-form'
            label='Email address'
          />
          <FooterNav />

          <p className='c-footer__copyright'>
            &copy; {new Date().getFullYear()} {globals.company.name}
          </p>
        </LayoutContainer>
      </footer>
    );
  }
}
