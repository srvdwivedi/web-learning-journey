export const ACTIONS = {
    'FETCH_SUCCESS': 'FETCH_SUCCESS',
    'FETCH_ERROR': 'FETCH_ERROR'
}

export const initialState = {
    items: [],
    isLoading: false,
    error: null
}

export const listReducer = (state, action) => {
    switch (action.type){
        case ACTIONS.FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.payload,
                error: null
            }
        
        case ACTIONS.FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}