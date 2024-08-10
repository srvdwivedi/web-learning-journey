import { createContext, useReducer, useEffect } from "react";
import { listReducer, initialState, ACTIONS } from './ListReducer'
import fetchItems from "../api/apiUtils";

//create context 
const ListContext = createContext()

//create provider
const ListProvider = ({ children }) => {
    const [state, dispatch] = useReducer(listReducer, initialState);

    useEffect(()=>{
        const getItems = async ()=>{
            try{
                const data = await fetchItems()

                dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: data})

            } catch (error){

                dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: error})

            }
        }
        getItems();
    }, [])


    return (
        <ListContext.Provider value={{ state, dispatch }}>
            {children}
        </ListContext.Provider>
    )
    
}

export { ListProvider, ListContext };

