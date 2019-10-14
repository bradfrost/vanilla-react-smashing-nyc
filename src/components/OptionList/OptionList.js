import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class OptionList extends Component {
  render() {
    return (
      <ul className='c-option-list'>
        {this.props.listItems.map((listItem, index) => {
          let boundItemChange = this.onItemChange.bind(this, listItem);
          return (
            <li
              className='c-option-list__item'
              key={`option-list-item-${index}`}
            >
              {console.log(this.props.label)}
              <label className='c-input-group' htmlFor={listItem.id}>
                <input
                  id={listItem.id}
                  type={listItem.type}
                  name={listItem.name}
                  value={listItem.value}
                  className='c-input-group__control'
                  checked={listItem.checked}
                  disabled={listItem.disabled}
                  readOnly={listItem.readonly}
                  onChange={boundItemChange}
                  aria-describedby={this.props.ariaDescribedBy}
                  aria-labelledby={this.props.ariaLabelledBy}
                />
                <span className='c-input-group__text'>{listItem.text}</span>
              </label>
            </li>
          );
        })}
      </ul>
    );
  }
}

OptionList.propTypes = {
  listItems: PropTypes.array,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  text: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string
};

OptionList.defaultProps = {
  listItems: [
    {
      id: 'radio-1',
      name: 'radioexample',
      text: 'Radio 1',
      type: 'radio'
    },
    {
      id: 'radio-2',
      name: 'radioexample',
      text: 'Radio 2',
      type: 'radio'
    },
    {
      id: 'radio-3',
      name: 'radioexample',
      text: 'Radio 3',
      type: 'radio'
    }
  ]
};
