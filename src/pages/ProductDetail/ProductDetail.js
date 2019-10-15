import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { Section } from '../../components/Section/Section';
import { CardList } from '../../components/CardList/CardList';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import AddToCartForm from '../../components/AddToCartForm/AddToCartForm';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';

export class ProductDetail extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />

        <main role='main'>
          <LayoutContainer>
            <PageHeader title='GIF Peanut Butter' description={false} />
            <ImageGallery />
            <ProductDescription />
            <AddToCartForm />
            <Section title='Ratings'>
              <div className='fpo'>Rating details</div>
            </Section>
            <Section title='Related products'>
              <CardList />
            </Section>
          </LayoutContainer>
        </main>

        <Footer />
      </React.Fragment>
    );
  }
}
