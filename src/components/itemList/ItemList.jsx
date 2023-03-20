import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ItemList.css';
import ItemContainer from './itemContainer/ItemContainer';

const ItemList = () => {
  // const url = import.meta.env.VITE_API_URL;
  const [listItem, setListItem] = useState([]);
  const [itemType, setItemType] = useState([]);
  const [itemFilter, setItemFilter] = useState('');

  // const [urlApi, setUrlApi] = useState(`${url}/weapons`);

  useEffect(() => {
    const getApi = () => {
      axios
        .get(`https://mhw-db.com/weapons/`)
        .then((res) => {
          setListItem(res.data);
          setItemType([...new Set(res.data.map((item) => item.type))]);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    getApi();
  }, []);

  const handleClickFilter = (item) => {
    setItemFilter(item.target.value);
  };

  return (
    <div>
      <section className='item-list-container'>
        <div className='btn-container'>
          <button className='btn-wpn'>WEAPON</button>
          <button className='btn-armor'>ARMOR</button>
          <button className='btn-charm'>CHARM</button>
          <button className='btn-decor'>DECORATION</button>
        </div>
        <div className='item-filter'>
          <div>
            {itemType.map((type, index) => (
              <button key={index} value={type} onClick={handleClickFilter}>
                {type}
              </button>
            ))}
          </div>
          <ItemContainer listItem={listItem} itemFilter={itemFilter} />
        </div>
      </section>
    </div>
  );
};

export default ItemList;
