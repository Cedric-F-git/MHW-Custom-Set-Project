import React from 'react';
import './ItemContainer.css';
import notFound from '../../../assets/Icon-Not-Found.png';

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
              {item.assets && item.assets.icon ? (
                <img
                  src={item.assets.icon}
                  alt="Weapon's icon"
                  className='weapon-icon'
                />
              ) : (
                <img
                  src={notFound}
                  alt="Weapon's icon"
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
