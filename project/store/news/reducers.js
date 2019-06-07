import { APP_NEWS } from './actions';

const defaultState = {
    news: '',
}

export const setNewsDataApi = (state = defaultState, action) => {

    switch (action.type){
        case APP_NEWS:
            return {
                ...state,
                news: action.payload
            };

        default:
            return state
    }

    return state;

};