// Redux

import { createStore } from 'redux';

//Action

const CAKE_ORDERED = 'CAKE_ORDERED';

const orderCake = ()=>{
    return {
        type: 'CAKE_ORDERED',
        quantity: 1,
    }
}

const initialState = {
    numOfCakes: 10
}

//Store

//Reducer

const reducer = (state = initialState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state
    }
}


const store = createStore(reducer)
console.log('INITIAL STATE:', store?.getState())

store.subscribe(()=> console.log('updated state:', store?.getState()))

store?.dispatch(orderCake())




