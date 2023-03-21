import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ItemList.css';
import ItemContainer from './itemContainer/ItemContainer';

const ItemList = () => {
  let [urlApi, setUrlApi] = useState(`weapons`);

  const [listItem, setListItem] = useState([]);
  const [itemType, setItemType] = useState([]);
  const [itemFilter, setItemFilter] = useState('');
  const [changeButtonValue, setChangeButtonValue] = useState('weapons');

  useEffect(() => {
    const getApi = () => {
      axios
        .get(`https://mhw-db.com/${urlApi}`)
        .then((res) => {
          setListItem(res.data);
          setItemType([...new Set(res.data.map((item) => item.type))]);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    getApi();
  }, [urlApi]);

  const handleChangeFilter = (item) => {
    setItemFilter(item.target.value);
  };

  const handleChangeUrlApi = (item) => {
    setUrlApi(item.target.value);
    setChangeButtonValue(item.target.value);
  };

  console.log(itemType);

  return (
    <div>
      <section className='item-list-container'>
        <div className='btn-container'>
          <button
            className='btn-wpn'
            value='weapons'
            onClick={handleChangeUrlApi}
          >
            WEAPON
          </button>
          <button
            className='btn-armor'
            value='armor'
            onClick={handleChangeUrlApi}
          >
            ARMOR
          </button>
          <button
            className='btn-charm'
            value='charms'
            onClick={handleChangeUrlApi}
          >
            CHARM
          </button>
          <button
            className='btn-decor'
            value='decorations'
            onClick={handleChangeUrlApi}
          >
            DECORATION
          </button>
        </div>

        <div className='item-filter'>
          {itemType.length > 0 ? (
            <div>
              <select className='select-custom' onClick={handleChangeFilter}>
                <option>Choose {changeButtonValue}</option>
                {itemType.map((type, index) => (
                  <option key={index}>{type}</option>
                ))}
              </select>
            </div>
          ) : null}
          <ItemContainer listItem={listItem} itemFilter={itemFilter} />
        </div>
      </section>
    </div>
  );
};

export default ItemList;
