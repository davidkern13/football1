import axios from "axios/index";

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
 * List of api url
 * Import this method in you component, get the api url and call the getApiData method with param
 * @param - String
 */
export const getApisUrls = (value) =>{

    let currentListApis = {
        matches : {url:'http://bigfiveplus.com/get-all-new-copa-america'},
        tables : {url:'http://bigfiveplus.com/get-all-new-copa-america'},
        news : {url:'http://bigfiveplus.com/get-all-new-copa-america'},
        scorers : {url:'http://bigfiveplus.com/get-all-new-copa-america'},
    };

    return currentListApis.value;
}