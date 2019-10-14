import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './LayoutContainer.scss';

class LayoutContainer extends React.Component {
  render() {
    const { className, children, variant, align, ...other } = this.props;

    const componentClassName = classnames('l-container', className, {});
    return (
      <div className={componentClassName} {...other}>
        {children}
      </div>
    );
  }
}

LayoutContainer.propTypes = {
  /**
   * Align variations:
   * - **center** yields a LayoutContainer that horizontally and vertically centers the layout container
   */
  align: PropTypes.oneOf(['center']),
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Stylistic variations:
   * - **narrow** yields a LayoutContainer with a narrower width
   * - **very-narrow** yields a LayoutContainer with a very narrow width
   */
  variant: PropTypes.oneOf(['narrow', 'very-narrow'])
};

export default LayoutContainer;
