import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';

// reducer
import ucapanReducer from './reducer/ucapan'

const reducers = combineReducers({
    ucapanReducer
})

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store