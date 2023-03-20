import React from 'react';
import './ItemContainer.css';

const ItemContainer = ({ listItem, itemFilter }) => {
  return (
    <div className='item-list'>
      {listItem.length > 0 ? (
        listItem
          .filter((item) => item.type.includes(itemFilter))
          .map((item, index) => (
            <li className='item' key={index}>
              {item.assets ? (
                <img src={item.assets.icon} alt='' className='weapon-icon' />
              ) : (
                'No'
              )}
              {item.name}
            </li>
          ))
      ) : (
        <div
          className='
        no-results-message'
        >
          No item choice
        </div>
      )}
    </div>
  );
};

export default ItemContainer;
