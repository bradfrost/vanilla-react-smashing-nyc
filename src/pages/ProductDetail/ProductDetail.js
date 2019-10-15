import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
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
            <div className='fpo'>Product description</div>
            <div className='fpo'>Add to cart</div>
            <div className='fpo'>Addition info (allergy info, origin)</div>
            <div className='fpo'>Ratings</div>
            <div className='fpo'>Related Products</div>
          </LayoutContainer>
        </main>

        <Footer />
      </React.Fragment>
    );
  }
}
