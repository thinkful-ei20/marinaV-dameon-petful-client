

import Index from '../actions';
console.log(Index);

const initialState = {  
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
}

  
export default function catReducer(state=initialState, Index) {
switch (Index) {

  case Index.FETCH_CAT_REQUEST: 
      return Object.assign({}, state, {
          loading:true
          })

      default:
      return state
        }
      };    