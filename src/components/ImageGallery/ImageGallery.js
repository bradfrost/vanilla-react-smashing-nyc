import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './ImageGallery.scss';

class ImageGallery extends React.Component {
  render() {
    const { className, children, ...other } = this.props;

    const componentClassName = classnames('c-image-gallery', className, {});
    return (
      <div className={componentClassName} {...other}>
        <img
          src='https://via.placeholder.com/600x400'
          alt={this.props.alt}
          className='c-image-gallery__main-img'
        />
        <ul className='c-image-gallery__thumb-list'>
          <li className='c-image-gallery__thumb-item'>
            <a href='' className='c-image-gallery__thumb-link'>
              <img
                src='https://via.placeholder.com/200x100'
                alt=''
                className='c-image-gallery__thumb-img'
              />
            </a>
          </li>
          <li className='c-image-gallery__thumb-item'>
            <a href='' className='c-image-gallery__thumb-link'>
              <img
                src='https://via.placeholder.com/200x100'
                alt=''
                className='c-image-gallery__thumb-img'
              />
            </a>
          </li>
          <li className='c-image-gallery__thumb-item'>
            <a href='' className='c-image-gallery__thumb-link'>
              <img
                src='https://via.placeholder.com/200x100'
                alt=''
                className='c-image-gallery__thumb-img'
              />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

ImageGallery.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string
};

export default ImageGallery;
