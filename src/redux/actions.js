import { GET_ROMANTIC_COMEDY_MOVIE } from "./types";
import page1 from './API/CONTENTLISTINGPAGE-PAGE1.json'
import page2 from './API/CONTENTLISTINGPAGE-PAGE2.json'
import page3 from './API/CONTENTLISTINGPAGE-PAGE3.json'

export function getRomanticComedyMovies(previousData, page) {
    let data;
    if (page === 1) {
        data = page1
    } else if (page === 2) {
        data = page2
    } else if (page === 3) {
        data = page3
    }
    return function (dispatch) {
        dispatch({
            type: GET_ROMANTIC_COMEDY_MOVIE,
            payload: { data, previousData }
        });
    }
}