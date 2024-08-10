// src/components/PokemonListing.js
import React, { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext/PokemonContext';

const PokemonListing = () => {
    const { state } = useContext(PokemonContext);
    const { pokemon, loading, error } = state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const {results} = pokemon

    return (
        <ul>
            {results?.map((item, index) => (
                <li key={index}>{item.name}</li> // Adjust according to your item structure
            ))}
        </ul>
    );
};

export default PokemonListing;
