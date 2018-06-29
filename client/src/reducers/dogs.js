

import Index from '../actions';
console.log(Index);

const initialState = {
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
}
// const initialState = {
//   data: null,
//   error: null,
//   loading: false
// };

export default function dogReducer(state=initialState, Index) {
  switch (Index) {
  
  
        default:
        return state
          }
        }; 


       
        
       
        
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
        