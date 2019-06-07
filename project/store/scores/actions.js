export const APP_TOP_SCORERS = 'APP_TOP_SCORERS';

export const setTopscorers = scorers => ({
    type: APP_TOP_SCORERS,
    payload: scorers
});