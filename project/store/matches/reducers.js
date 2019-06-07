import { APP_MATCHES } from './actions';

const defaultState = {
    matches: '',
}

export const setMatchesDataApi = (state = defaultState, action) => {

    switch (action.type){
        case APP_MATCHES:
            return {
                ...state,
                matches: action.payload
            };

        default:
            return state
    }

    return state;

};