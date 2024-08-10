import React, { createContext, useReducer, useEffect } from 'react';
import { pokemonReducer, initialState} from './PokemonReducer';
import fetchItems from '../../api/apiUtils';

const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=1000'

const PokemonContext = createContext()

const PokemonProvider = ({ children }) => {

    const [state, dispatch] = useReducer(pokemonReducer, initialState);

    useEffect(()=>{
        const getItems = async ()=>{
            try{
                const data = await fetchItems(API_URL)

                dispatch({ type: 'POKEMON_LIST', payload: data})

            } catch (error){

                dispatch({ type: 'POKEMON_ERROR', payload: error})

            }
        }
        getItems();
    }, [])


    return(
        <PokemonContext.Provider value={{ state, dispatch }}>
            {children}
        </PokemonContext.Provider>
    )

}

export { PokemonContext, PokemonProvider}
