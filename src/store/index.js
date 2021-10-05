import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from '../middleware/logger'
import reducerScheduler from './scheduler/reducer'

const store = createStore(combineReducers({
    pokemon: reducerScheduler,
}), applyMiddleware(logger, thunk))

export default store