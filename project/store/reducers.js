import { combineReducers } from 'redux';

import { setAssistsDataApi } from './assists/reducers';
import { setCardsDataApi } from './cars/reducers';
import { setMatchesDataApi } from './matches/reducers';
import { setNewsDataApi } from './news/reducers';
import { setScorersDataApi } from './scores/reducers';
import { setTablesDataApi } from './tables/reducers';

export default combineReducers ({
    setAssistsDataApi: setAssistsDataApi,
    setCardsDataApi: setCardsDataApi,
    setMatchesDataApi: setMatchesDataApi,
    setNewsDataApi: setNewsDataApi,
    setScorersDataApi: setScorersDataApi,
    setTablesDataApi: setTablesDataApi
});