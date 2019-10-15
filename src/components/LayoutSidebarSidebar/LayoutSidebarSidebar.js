import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './LayoutSidebarSidebar.scss';

class LayoutSidebarSidebar extends React.Component {
  render() {
    const { className, children, ...other } = this.props;

    const componentClassName = classnames('c-layout-sidebar-sidebar', className, {});
    return (
      <div className={componentClassName} {...other}>
        {children}
      </div>
    );
  }
}

LayoutSidebarSidebar.propTypes = {
  /**
     * Child node(s) that can be nested inside component
     */
  children: PropTypes.node,
  /**
     * CSS class names that can be appended to the component.
     */
  className: PropTypes.string
};

export default LayoutSidebarSidebar;
