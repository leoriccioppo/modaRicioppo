import React, { useState, useEffect } from 'react';
import { Item } from '../item';
import axios from 'axios';
import { fetchData } from '../../../services/api.services';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetchData('/products?limit=5'); // Chamando a função fetchData com o endpoint correto
        setItems(response);
      } catch (error) {
        console.error('Erro ao obter dados da API:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <div className="item-list">
      {loading ? (
        <p>Carregando dados...</p>
      ) : (
        items.map((item) => <Item key={item.id} item={item} />)
      )}
    </div>
  );
};

export { ItemList };