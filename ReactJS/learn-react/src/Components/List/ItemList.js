// src/components/ItemList.js
import React, { useContext } from 'react';
import { ListContext } from '../../context/ListContext';

const ItemList = () => {
    const { state } = useContext(ListContext);
    const { items, loading, error } = state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.name}</li> // Adjust according to your item structure
            ))}
        </ul>
    );
};

export default ItemList;
