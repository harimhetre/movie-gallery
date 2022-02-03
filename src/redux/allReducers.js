import { combineReducers } from 'redux'
import romanticComedyReducer from './reducers'


const rootReducer = combineReducers({
    romanticComedyReducer
})

const reducers = (state, action) => {
    return rootReducer(state, action)
}

export default reducers
