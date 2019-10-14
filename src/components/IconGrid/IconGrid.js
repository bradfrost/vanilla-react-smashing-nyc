import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon/Icon';
import './IconGrid.scss';

export class IconGrid extends Component {
  render() {
    return (
      <ul className='icon-grid'>
        {this.props.listItems.map(function(item, index) {
          return (
            <li className='icon-grid__item' key={`icon-grid-item-${index}`}>
              <Icon iconname={item.iconname} />
              <span className='icon-grid__text'>{item.iconname}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}

IconGrid.propTypes = {
  iconclass: PropTypes.string,
  iconname: PropTypes.string,
  listItems: PropTypes.array
};

IconGrid.defaultProps = {
  listItems: [
    {
      iconname: 'minus'
    },
    {
      iconname: 'plus'
    },
    {
      iconname: 'search'
    },
    {
      iconname: 'shopping-cart'
    },
    {
      iconname: 'triangle-down'
    },
    {
      iconname: 'triangle-left'
    },
    {
      iconname: 'triangle-right'
    },
    {
      iconname: 'triangle-up'
    }
  ]
};
