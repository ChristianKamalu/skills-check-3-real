import {createStore} from 'redux';  
import Axios from 'axios';

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    image: '',
    mortgage: '',
    rent: '',
    properties: []
}

export const INFO = "INFO";
export const IMAGE = "IMAGE";

function reducer (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case INFO:
            const property = {
                name: payload.name,
                address: payload.address,
                city: payload.city,
                state: payload.state,
                zip: payload.zip
            }
            const newProperty = { ...state.properties, property };
            return { ...state, newProperty }
        default:
            return state
    }
}

export default createStore(reducer)