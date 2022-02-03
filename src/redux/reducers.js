import { GET_ROMANTIC_COMEDY_MOVIE } from "./types"


const INITIAL_STATE = {
    romanticComedyMovies: [],
    totalRomanticComedyMovies: 0
}

const romanticComedyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ROMANTIC_COMEDY_MOVIE:
            return {
                ...state,
                romanticComedyMovies: [...action.payload?.previousData, ...action.payload?.data?.page?.['content-items']?.content],
                totalRomanticComedyMovies: action?.payload?.data?.page?.['total-content-items']
            }
        default:
            return state
    }
}
export default romanticComedyReducer 