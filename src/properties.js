import {createStore} from 'redux';  
import Axios from 'axios';

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    properties: []
}

export const NAME = 'NAME';
export const ADDRESS = 'ADDRESS';
export const CITY = 'CITY';
export const STATE = 'STATE';
export const ZIP = 'ZIP';
export const PROPERTIES = 'PROPERTIES';

function reducer (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case NAME:
            return { ...state, name: payload }
        case ADDRESS:
            return { ...state, address: payload }
        case CITY:
            return { ...state, city: payload }
        case STATE:
            return { ...state, state: payload}
        case ZIP:
            return { ...state, zip: payload}
        case PROPERTIES:
            const property = {
                name: state.name,
                address: state.address,
                city: state.city,
                state: state.state,
                zip: state.zip
            }
            const newProperty = { ...state.properties, property };
            return { ...state, newProperty }
        default:
            return state
    }
}

export default createStore(reducer)