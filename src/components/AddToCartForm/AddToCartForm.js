import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { TextField } from '../../components/TextField/TextField';
import { Button } from '../../components/Button/Button';
import './AddToCartForm.scss';

class AddToCartForm extends React.Component {
  render() {
    const { className, children, ...other } = this.props;

    const componentClassName = classnames('c-add-to-cart-form', className, {});
    return (
      <div className={componentClassName} {...other}>
        <TextField label='Quantity' type='number' />
        <Button text='Add to Cart' />
      </div>
    );
  }
}

AddToCartForm.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string
};

export default AddToCartForm;
