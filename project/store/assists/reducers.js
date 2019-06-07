import { APP_ASSISTS } from './actions';

const defaultState = {
    assists: '',
}

export const setAssistsDataApi = (state = defaultState, action) => {

    switch (action.type){
        case APP_ASSISTS:
            return {
                ...state,
                assists: action.payload
            };

        default:
            return state
    }

    return state;

};