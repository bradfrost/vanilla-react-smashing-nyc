import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Grid.scss';

class Grid extends React.Component {
  render() {
    const {
      className,
      variant,
      children,
      gap,
      colGap,
      rowGap,
      ...other
    } = this.props;

    const componentClassName = classnames('l-grid', className, {
      'l-grid--2up': variant == '2up',
      'l-grid--side-by-side': variant == 'side-by-side',
      'l-grid--1-to-3up': variant == '1-to-3up',
      'l-grid--3up': variant == '3up',
      'l-grid--4up': variant == '4up',
      'l-grid--spacing-none': gap == 'none',
      'l-grid--spacing-small': gap == 'small',
      'l-grid--spacing-large': gap == 'large',
      'l-grid--spacing-xl': gap == 'xl',
      'l-grid--row-spacing-none': rowGap == 'none',
      'l-grid--row-spacing-small': rowGap == 'small',
      'l-grid--row-spacing-large': rowGap == 'large',
      'l-grid--row-spacing-xl': rowGap == 'xl',
      'l-grid--column-spacing-none': colGap == 'none',
      'l-grid--column-spacing-small': colGap == 'small',
      'l-grid--column-spacing-large': colGap == 'large',
      'l-grid--column-spacing-xl': colGap == 'xl'
    });

    return (
      <div className={componentClassName} {...other}>
        {children}
      </div>
    );
  }
}

Grid.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * Adds CSS class name to adjust column grid gap between GridItems
   */
  colGap: PropTypes.string,
  /**
   * Adds CSS class name to adjust grid gap between GridItems
   */
  gap: PropTypes.string,
  /**
   * Adds CSS classname to adjust row grid gap between GridItems
   */
  rowGap: PropTypes.string,
  /**
   * Stylistic variations of the GridL
   * - **1up** yields a Grid whose GridItems span the entire width of the container
   * - **1-to-3up** yields a Grid whose GridItems are stacked on small screens and expand to fit 3 across when enough screen real estate becomes available to display them comfortably side-by-side
   * - **2up** yields a Grid whose GridItems are stacked on small screens but display side-by-side when enough screen real estate is available to do so
   * - **3up** yields a Grid whose GridItems are stacked on small screens, transforms to a 2-across pattern and then transforms again to a 3-across pattern
   * - **4up** yields a Grid whose GridItems are stacked on small screens, transforms to a 2-across pattern, transforms again to a 3-across pattern, and ultimately transforms to a 4-across pattern
   * - **side-by-side** yields a Grid whose GridItems are always displayed side-by-side
   */
  variant: PropTypes.oneOf(['1-to-3up', '2up', '3up', '4up', 'side-by-side'])
};

export default Grid;
