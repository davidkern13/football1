import { APP_YELLOW_CARS } from './actions';
import { APP_RED_CARS } from './actions';


const defaultState = {
    yellowCars: '',
    redCars: '',
}

export const setCardsDataApi = (state = defaultState, action) => {

    switch (action.type){
        case APP_YELLOW_CARS:
            return {
                ...state,
                yellowCars: action.payload
            };
        case APP_RED_CARS:
            return {
                ...state,
                redCars: action.payload
            };

        default:
            return state
    }

    return state;

};