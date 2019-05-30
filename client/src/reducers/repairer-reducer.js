import {REPAIRER_LOGIN_START,REPAIRER_LOGIN_SUCCESS,REPAIRER_LOGIN_ERRORS} from '../actions/types'

const initialState = {
    repairer: null,
    loading: true,
    auth: false,
    errors: null
}

const repairerReducer = (state = initialState,action) => {
    switch(action.type) {
      case REPAIRER_LOGIN_START :
        return {
            ...state,
            loading: true,
        }
      case REPAIRER_LOGIN_SUCCESS :
        return {
            ...state,
            repairer: action.payload,
            loading: false,
            auth: true
        }
      case REPAIRER_LOGIN_ERRORS :
        return {
            ...state,
            auth:false,
            errors: action.payload
        }
      default : {
          return state;
      }  
    }
}

export default repairerReducer;