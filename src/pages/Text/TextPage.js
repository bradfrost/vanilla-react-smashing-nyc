import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Header } from '../../components/Header/Header';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { TextPassage } from '../../components/TextPassage/TextPassage';
import { Footer } from '../../components/Footer/Footer';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';

export class TextPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header navitems={this.props.navitems} />

        <main>
          <LayoutContainer>
            <div className='l-linelength-container'>
              <PageHeader
                title={this.props.title}
                description={this.props.description}
              />
              <TextPassage>{this.props.children}</TextPassage>
            </div>
          </LayoutContainer>
        </main>

        <Footer />
      </React.Fragment>
    );
  }
}
