import { applyMiddleware, combineReducers, createStore } from 'redux'
import { cashReducer } from './cashReducer'
import { customerReducer } from './customerReducer'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer

})

export const store = createStore(rootReducer, applyMiddleware(thunk))

