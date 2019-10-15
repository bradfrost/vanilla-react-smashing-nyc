import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { CardList } from '../../components/CardList/CardList';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';

export class ProductCategory extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />

        <main role='main'>
          <LayoutContainer>
            <PageHeader title='Our Nutty Products' />

            <CardList />
          </LayoutContainer>
        </main>

        <Footer />
      </React.Fragment>
    );
  }
}
