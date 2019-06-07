/*
* Add in this file method was used more then one time
* Import this file in your component
* Import your method
* EnJoy :)
 */

/*
* Get list of icons
* return - object
*/
export const getIcons = (value) =>{

    let curListArray = {
        home : {'icon':''},
        matches : {'icon':''},
        tables : {'icon':''},
        news : {'icon':''},
        scorers : {'icon':''},
    };

    return curListArray.value;
}