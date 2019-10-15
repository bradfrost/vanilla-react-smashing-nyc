import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/Button/Button';
import { Section } from '../../components/Section/Section';
import { TextField } from '../../components/TextField/TextField';
import Grid from '../../components/Grid/Grid';
import GridItem from '../../components/GridItem/GridItem';
import { Footer } from '../../components/Footer/Footer';
import { TextPassage } from '../../components/TextPassage/TextPassage';
import { RadioField } from '../../components/RadioField/RadioField';
import { SelectField } from '../../components/SelectField/SelectField';
import Stripe from '../../components/Stripe/Stripe';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';
import LayoutSidebar from '../../components/LayoutSidebar/LayoutSidebar';
import LayoutSidebarMain from '../../components/LayoutSidebarMain/LayoutSidebarMain';
import LayoutSidebarSidebar from '../../components/LayoutSidebarSidebar/LayoutSidebarSidebar';

export class Checkout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header joke='u-margin-bottom-none' />

        <main role='main'>
          <LayoutContainer variant='white'>
            <LayoutSidebar>
              <LayoutSidebarMain>
                <Section title='Billing address'>
                  <Grid>
                    <GridItem>
                      <TextField
                        name='text-field-1'
                        type='text'
                        label='First name'
                        placeholder='Placeholder'
                        title='Please enter the proper text into the field.'
                        fieldNote='This is the field note.'
                        ariaDescribedBy='text-field'
                      />
                    </GridItem>
                    <GridItem>
                      <TextField
                        name='text-field-1'
                        type='text'
                        label='Last name'
                        placeholder='Placeholder'
                        title='Please enter the proper text into the field.'
                        fieldNote='This is the field note.'
                        ariaDescribedBy='text-field'
                      />
                    </GridItem>
                    <GridItem>
                      <TextField
                        name='text-field-1'
                        type='text'
                        label='Street address'
                        placeholder='Placeholder'
                        title='Please enter the proper text into the field.'
                        fieldNote='This is the field note.'
                        ariaDescribedBy='text-field'
                      />
                    </GridItem>
                    <GridItem>
                      <TextField
                        name='text-field-1'
                        type='text'
                        label='City'
                        placeholder='Placeholder'
                        title='Please enter the proper text into the field.'
                        fieldNote='This is the field note.'
                        ariaDescribedBy='text-field'
                      />
                    </GridItem>
                    <GridItem>
                      <TextField
                        name='text-field-1'
                        type='text'
                        label='State'
                        placeholder='Placeholder'
                        title='Please enter the proper text into the field.'
                        fieldNote='This is the field note.'
                        ariaDescribedBy='text-field'
                      />
                    </GridItem>
                    <GridItem>
                      <TextField
                        name='text-field-1'
                        type='text'
                        label='Zip code'
                        placeholder='Placeholder'
                        title='Please enter the proper text into the field.'
                        fieldNote='This is the field note.'
                        ariaDescribedBy='text-field'
                      />
                    </GridItem>
                  </Grid>
                </Section>
                <Section title='Shipping method'>
                  <TextPassage className='u-margin-bottom-large'>
                    Below are the shipping methods for your delicious peanut
                    butter and jelly sandwiches.
                  </TextPassage>
                  <RadioField
                    required={true}
                    listItems={[
                      {
                        id: 'radio-1',
                        name: 'radioexample',
                        text: 'Standard shipping',
                        type: 'radio'
                      },
                      {
                        id: 'radio-2',
                        name: 'radioexample',
                        text: 'Premium shipping',
                        type: 'radio'
                      },
                      {
                        id: 'radio-3',
                        name: 'radioexample',
                        text: 'I-need-my-PB-now shipping',
                        type: 'radio'
                      }
                    ]}
                    fieldNote='This is a required field'
                  />
                </Section>
                <Section title='Payment details'>
                  <TextPassage className='u-margin-bottom-large'>
                    Please enter your payment information to receive your
                    creamy, amazing PB and Js
                  </TextPassage>
                  <Grid>
                    <SelectField label='Credit card number' required />
                    <GridItem>
                      <TextField
                        name='text-field-1'
                        type='text'
                        label='Credit card number'
                        placeholder='Placeholder'
                        title='Please enter the proper text into the field.'
                        fieldNote='This is the field note.'
                        ariaDescribedBy='text-field'
                      />
                    </GridItem>
                    <GridItem>
                      <TextField
                        name='text-field-1'
                        type='text'
                        label='Expiration date'
                        placeholder='Placeholder'
                        title='Please enter the proper text into the field.'
                        fieldNote='This is the field note.'
                        ariaDescribedBy='text-field'
                      />
                    </GridItem>
                    <GridItem>
                      <TextField
                        name='text-field-1'
                        type='text'
                        label='CVV'
                        placeholder='Placeholder'
                        title='Please enter the proper text into the field.'
                        fieldNote='This is the field note.'
                        ariaDescribedBy='text-field'
                      />
                    </GridItem>
                  </Grid>
                </Section>
              </LayoutSidebarMain>
              <LayoutSidebarSidebar>
                <Section sticky title='Review your order'>
                  <Stripe className='u-margin-bottom'>
                    <div className='c-stripe__left'>
                      <img src='https://via.placeholder.com/150x100' />
                    </div>
                    <div className='c-stripe__right'>
                      <div>Delicious PB and J Sandwich</div>
                      <div>
                        <strong>$100.00</strong>
                      </div>
                    </div>
                  </Stripe>
                  <Stripe>
                    <div className='c-stripe__left'>
                      <img src='https://via.placeholder.com/150x100' />
                    </div>
                    <div className='c-stripe__right'>
                      <div>Another Delicious PB and J Sandwich</div>
                      <div>
                        <strong>$100.00</strong>
                      </div>
                    </div>
                  </Stripe>
                  <div className='u-margin-top-large u-margin-bottom-large'>
                    <span className='u-margin-right'>
                      <strong>Total</strong>
                    </span>
                    <span>$150.00</span>
                  </div>
                  <Button text='Place order' />
                </Section>
              </LayoutSidebarSidebar>
            </LayoutSidebar>
          </LayoutContainer>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

Checkout.propTypes = {};

import heroImg from '../../images/fpo-1200x650.png';

Checkout.defaultProps = {
  heroTitle: 'Hero Title',
  heroDescription: 'this is the hero description',
  heroImgSrc: heroImg,
  heroImgAlt: 'Alt Text',
  section1Title: 'Section Title',
  section1Description: 'This is the section description',
  cardListItems: [
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
      title: 'Card 5',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Card 6',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ]
};
