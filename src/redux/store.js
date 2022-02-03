import thunk from 'redux-thunk'
import reducers from './allReducers'
import { createStore, applyMiddleware, compose } from 'redux'

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
    )
)

export default store
