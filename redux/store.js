import { applyMiddleware, createStore, combineReducers} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

//import reducers
import worldDataReducer from './worldDataReducer'

const reducers = combineReducers({
    worldData: worldDataReducer
})

const middleware = applyMiddleware(thunk, logger)

const store = createStore(reducers, middleware)

export default store