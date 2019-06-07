import { APP_TABLES } from './actions';

const defaultState = {
    tables: '',
}

export const setTablesDataApi = (state = defaultState, action) => {

    switch (action.type){
        case APP_TABLES:
            return {
                ...state,
                tables: action.payload
            };

        default:
            return state
    }

    return state;

};