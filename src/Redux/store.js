import { legacy_createStore } from 'redux';

const initialState = {
    cartItems: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            const tempstate = state.cartItems.filter((item) => action.payload.id === item.id);
            if (tempstate.length > 0) {
                return state;
            } else {
                return { ...state, cartItems: [...state.cartItems, action.payload] };
            }
        case 'REMOVE':
            const tempstate3 = state.cartItems.filter((item) => item.id !== action.payload.id);
            return { ...state, cartItems: tempstate3 };
        default:
            return state;
    }
};

const store = legacy_createStore(reducer);
export default store;