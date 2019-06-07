import { APP_TOP_SCORERS } from './actions';

const defaultState = {
    scorers: '',
}

export const setScorersDataApi = (state = defaultState, action) => {

    switch (action.type){
        case APP_TOP_SCORERS:
            return {
                ...state,
                scorers: action.payload
            };

        default:
            return state
    }

    return state;

};