export const initialState = {
    pokemon: [],
    isLoading: false,
    error: null
}

export const pokemonReducer = (state, action)=>{
    switch (action.type){
        case 'POKEMON_LIST':
            return{
                ...state,
                loading: false,
                pokemon: action.payload
            }

        case 'POKEMON_ERROR':
            return{
                ...state,
                loading: false,
                pokemon: []
            }
        default:
            return state;
    }
}