import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './ProductDescription.scss';

class ProductDescription extends React.Component {
  render() {
    const { className, children, ...other } = this.props;

    const componentClassName = classnames(
      'c-product-description',
      className,
      {}
    );
    return (
      <div className={componentClassName} {...other}>
        <p>
          Lorem ipsum dolor amet pitchfork everyday carry whatever celiac.
          Pinterest cliche freegan tote bag. Cloud bread offal waistcoat, +1
          meggings celiac squid cornhole. Glossier 3 wolf moon single-origin
          coffee +1 fixie raclette master cleanse forage iPhone offal plaid.
          Ramps snackwave wolf fingerstache plaid ugh locavore shoreditch
          narwhal kinfolk gluten-free drinking vinegar biodiesel you probably
          haven't heard of them raw denim.
        </p>
      </div>
    );
  }
}

ProductDescription.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string
};

export default ProductDescription;
