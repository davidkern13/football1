import axios from 'axios';

/*
 * Import this method in you component and call with urlApi param
 * @param - String
 */
export const getApiData = async (urlApi) => {
    try {
        let resData = await axios.get(urlApi)
            .then(res => {
                return res;
            });
        return resData;
    } catch (e) {
        console.log(e);
        return null;
    }
};

/*
 * Get data at start the app
 */
export const getStartedData = async () => {

    // let objectOfApis = getApisUrls(false, true);

    // fetch(getstages).then((response) => response.json()).then((responseData)  => {
        // this.setState({
            // city: responseData.location.city
        // });
    // }).then(()=>{
        // fetch(request_2_url).then((response) => response.json()).then((responseData) => {
            // this.setState({
                // state: responseData.location.state,
                // isFinish: true
            // });
        // }).done();
    // }).done();
}

/*
 * List of api url
 * Import this method in you component, get the api url and call the getApiData method with param
 * value = name of api url
 * all = return all api
 * @param - String
 */
export const getApisUrls = (value, all) =>{

    let currentListApis = {
        matches:'http://bigfiveplus.com/get-all-new-copa-america',
        tables:'https://bigfiveplus.com/standings-tables-api/copa-america',
        news:'http://bigfiveplus.com/get-all-new-copa-america',
        scorers:'https://bigfiveplus.com/scorers-api/ligue-1',
        matchbyid:'https://bigfiveplus.com/getMatchById/', //{id} in the end
        matchtoday:'https://bigfiveplus.com/today-games-api/copa-america',
        currentround:'https://bigfiveplus.com/get-current-round/copa-america',
        getmathcesbyround:'https://bigfiveplus.com/competition/copa-america/get-rounds/', //{round} in the end
        getstages:'https://bigfiveplus.com/get-stages/copa-america',
        getroundlist:'https://bigfiveplus.com/competition/copa-america/get-rounds',
    };

    /*
    *  name = copa-america
    *  matchtoday = set param or today or date like 2019-01-19
    */

    //return all apis
    if(all){
        return currentListApis;
    }

    return currentListApis[value];
}