

import Actions from '../actions';


const initialState = {    
    data: null,
    error: null,
    loading: false      
}

  
export default function catReducer(state=initialState, action) {
    switch (action.type) {
      case Actions.FETCH_CAT_REQUEST: 
           return Object.assign({}, state, {
                   loading:true
                   })
      case Actions.FETCH_CAT_SUCCESS: 
            return Object.assign({}, state, {
                   data:action.data,
                   loading:true
                   })
      case Actions.FETCH_CAT_ERROR: 
            return Object.assign({}, state, {
                   loading:true
                   })
      case Actions.DELETE_CAT_REQUEST: 
            return Object.assign({}, state, {
                   loading:true
                   })
      case Actions.DELETE_CAT_SUCCESS: 
            return Object.assign({}, state, {
                   loading:true
                   })
      case Actions.DELETE_CAT_ERROR: 
            return Object.assign({}, state, {
                   loading:true
                   })
      default:
      return state
        }
      }
     