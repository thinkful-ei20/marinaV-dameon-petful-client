import Actions from '../actions';


const initialState = {    
    data: null,
    error: null,
    loading: false      
}

  
export default function dogReducer(state=initialState, action) {
    switch (action.type) {
      case Actions.FETCH_DOG_REQUEST: 
           return Object.assign({}, state, {
                   loading:true
                   })
      case Actions.FETCH_DOG_SUCCESS: 
            return Object.assign({}, state, {
                   data:action.data,
                   loading:true
                   })
      case Actions.FETCH_DOG_ERROR: 
            return Object.assign({}, state, {
                   loading:true
                   })
      case Actions.DELETE_DOG_REQUEST: 
            return Object.assign({}, state, {
                   loading:true
                   })
      case Actions.DELETE_DOG_SUCCESS: 
            return Object.assign({}, state, {
                   loading:true
                   })
      case Actions.DELETE_DOG_ERROR: 
            return Object.assign({}, state, {
                   loading:true
                   })
      default:
      return state
        }
      }
     
       
        
        // export default (state = initialState, action) => {
        //   if (action.type === ADOPT_DOG_REQUEST || action.type === FETCH_DOG_REQUEST) {
        //     return Object.assign({}, state, {
        //       data: null,
        //       error: null,
        //       loading: true
        //     });
        //   }
        
        //   if (action.type === ADOPT_DOG_ERROR || action.type === FETCH_DOG_ERROR) {
        //     return Object.assign({}, state, {
        //       error: action.error,
        //       loading: false
        //     });
        //   }
        
        //   if (action.type === FETCH_DOG_SUCCESS) {
        //     return Object.assign({}, state, {
        //       data: action.data,
        //       loading: false
        //     });
        //   }
        
        //   if (action.type === ADOPT_DOG_SUCCESS) {
        //     return Object.assign({}, state, {
        //       data: null,
        //       loading: false
        //     });
        //   }
        
        //   return state;
        // };
        