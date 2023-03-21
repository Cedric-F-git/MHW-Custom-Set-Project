import React from 'react';
import './ItemContainer.css';

const ItemContainer = ({ listItem, itemFilter }) => {
  return (
    <div className='item-list'>
      {listItem.length > 0 ? (
        listItem
          .filter((item) =>
            itemFilter ? item.type && item.type.includes(itemFilter) : true
          )
          .map((item, index) => (
            <li className='item' key={index}>
              {item.assets ? (
                <img
                  src={item.assets.icon}
                  alt="Weapon's icon"
                  className='weapon-icon'
                />
              ) : (
                <img
                  src='../assets/Icon-Not-Found.png'
                  alt='Icon not found'
                  className='weapon-icon'
                />
              )}
              {item.name}
              {item.id}
            </li>
          ))
      ) : (
        <div
          className='
        no-results-message'
        >
          Item not selected
        </div>
      )}
    </div>
  );
};

export default ItemContainer;
