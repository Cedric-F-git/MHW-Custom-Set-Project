import React from 'react';

const ItemContainer = (listItem, itemFilter) => {
  console.log('coucou', listItem);
  return (
    <div>
      {listItem.length >= 0 ? (
        listItem
          .filter((item) => item.type.includes(itemFilter))
          .map((item, index) => <li key={index}>{item.name}</li>)
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
