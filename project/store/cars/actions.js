export const APP_YELLOW_CARS = 'APP_YELLOW_CARS';
export const APP_RED_CARS = 'APP_RED_CARS';

export const setYellowCars = yellowCars => ({
    type: APP_YELLOW_CARS,
    payload: yellowCars
});

export const setRedCars = redCars => ({
    type: APP_RED_CARS,
    payload: redCars
});