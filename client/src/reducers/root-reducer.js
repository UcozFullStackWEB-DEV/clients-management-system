import { combineReducers } from 'redux';
import RepairerReducer from './repairer-reducer';

export default combineReducers({
    repairer: RepairerReducer
})

